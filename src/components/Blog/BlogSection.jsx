import { useEffect, useState } from 'react';
import usePost from '../../Hooks/usePost';
import sanitizeHtml from 'sanitize-html';

const BlogSection = () => {
  const $Post = usePost();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true); // Estado para controlar la carga

  const fetchPosts = async () => {
    setLoading(true); // Activar carga
    const { status, data } = await $Post.get();

    if (status) {
      setPosts(data.data.sort((a, b) => b.id - a.id));
    }
    setLoading(false); // Desactivar carga una vez obtenidos los datos
  };

  const handleRedirectInformation = (id) => {
    window.location.href = `/blogSection?id=${id}`;
  };

  useEffect(() => {
    if ($Post) {
      (async () => {
        await fetchPosts();
      })();
    }
  }, [$Post]);

  return (
    <section className='bg-white py-10 max-w-7xl mx-auto'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {loading
            ? Array(3)
                .fill(0)
                .map((_, index) => (
                  <div key={index} className='bg-white shadow-md rounded-xl overflow-hidden relative'>
                    <div className='w-full h-48 bg-gray-200 animate-pulse rounded-xl'></div>
                    <div className='p-6'>
                      <div className='flex items-center gap-2 text-sm text-gray-600 mb-4'>
                        <div className='w-6 h-6 bg-gray-300 rounded-full animate-pulse absolute right-6'></div>
                        <div className='w-24 bg-gray-300 h-4 animate-pulse rounded'></div>
                      </div>
                      <div className='w-32 h-4 bg-gray-300 animate-pulse rounded mb-2'></div>
                      <div className='w-full h-4 bg-gray-300 animate-pulse rounded'></div>
                    </div>
                  </div>
                ))
            : posts.map((blog, index) => (
                <div key={index} onClick={() => handleRedirectInformation(blog.id)} className='bg-white shadow-md rounded-xl overflow-hidden cursor-pointer'>
                  <img src={blog.url_image} alt={blog.title} className='w-full h-48 object-cover rounded-xl' />
                  <div className='p-6'>
                    <div className='flex items-center gap-2 text-sm text-gray-600 mb-4'>
                      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' className='w-5 h-5 text-[#214820]'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M8 7V3m8 4V3m-9 4h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' />
                      </svg>
                      <span>
                        {new Date(blog.created_at).toLocaleDateString('es-ES', {
                          day: '2-digit',
                          month: 'long',
                          year: 'numeric',
                        })}
                      </span>
                      <span className='ml-auto flex items-center gap-1'>
                        <div className='bg-[#214820] rounded-full w-6 h-6 p-1'>
                          <svg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' viewBox='0 0 512 512' id='user' fill='white'>
                            <path d='M256 256c52.805 0 96-43.201 96-96s-43.195-96-96-96-96 43.201-96 96 43.195 96 96 96zm0 48c-63.598 0-192 32.402-192 96v48h384v-48c0-63.598-128.402-96-192-96z'></path>
                          </svg>
                        </div>
                        <span>{blog.created_by || 'Avovite'}</span>
                      </span>
                    </div>
                    <h3 className='font-bold text-xl text-gray-800 mb-2'> {blog.title}</h3>
                    <p
                      className='text-gray-600'
                      dangerouslySetInnerHTML={{
                        __html: sanitizeHtml(blog.description.slice(0, 100) + '...'),
                      }}
                    />
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
