import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import { sanityClient, urlFor } from '../sanity'
import { Post } from '../typings'

interface Props {
  posts: [Post]
}

export default function Home({ posts }: Props) {
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Medium Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="flex justify-between items-center bg-yellow-400 border-y border-black py-10 lg:py-0" >

        <div className="px-9 space-y-5">
          <h1 className="text-8xl max-w-xl font-serif">Stay curious.</h1>
          <h2 className="text-2xl">Discover stories, thinking, and expertise from writers on any topic.</h2>
          {/* <h3 className="text-white bg-black px-5 py-1 rounded-full cursor-pointer">Start reading</h3> */}
        </div>

        <img
          className="hidden md:inline-flex h-32 lg:h-full"
          src="https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png"
          alt=""
        />

      </div>

      {/* Posts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6">
        {posts.map(post => (
          <Link key={post._id} href={`/post/${post.slug.current}`}>
            <div className="border rounded-lg group cursor-pointer overflow-hidden">
              <img 
                className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-100 ease-in-out"
                src={urlFor(post.mainImage).url()!} 
                alt="post-image"
              />

              <div className="flex justify-between p-5 bg-white">
                <div>
                  <p className="text-lg font-bold">{post.title}</p>
                  <p className="text-xs">{post.description} by {post.author.name}</p>
                </div>
                <img 
                  className="h-12 w-12"
                  src={urlFor(post.author.image).url()!} 
                  alt="author-image" 
                />
              </div>

            </div>
          </Link>
        ))}
      </div>

    </div>
  )
}

// SSR (Server Side Rendering)
export const getServerSideProps = async () => {

  const query = `*[_type == "post"]{
    _id,
    title,
    author -> {
     name, 
     image
    },
    description,
    mainImage,
    slug
  }`

  const posts = await sanityClient.fetch(query);

  return {
    props: {
      posts,
    }
  }
}

