import React, { useState } from 'react';

const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto'];

const images = {
  'Enero 2023': [['https://i0.wp.com/avovite.com/wp-content/uploads/2023/12/15-1.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2023/12/35-1.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2023/12/43.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2023/12/45.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2023/12/11-1.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2023/12/12-1.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2023/12/10-1.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2023/12/34-1.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2023/12/03-1.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2023/12/09-1.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2023/12/29-1.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2023/12/13-1.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2023/12/14-1.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2023/12/31-1.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2023/12/30-1.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2023/12/06-1.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2023/12/41.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2023/12/36-1.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2023/12/39-1.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2023/12/01-1.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2023/12/44.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2023/12/37-1.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2023/12/28-1.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2023/12/46.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2023/12/24-1.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2023/12/38-1.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2023/12/33-1.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2023/12/08-1.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2023/12/32-1.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2023/12/02-1.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2023/12/07-1.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2023/12/05-1.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2023/12/40.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2023/12/42.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2023/12/04-1.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2023/12/23-1.jpg?fit=800%2C800&ssl=1']],
  'Enero 2024': [['https://i0.wp.com/avovite.com/wp-content/uploads/2023/12/15-1.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2023/12/35-1.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2023/12/43.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2023/12/45.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2023/12/11-1.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2023/12/12-1.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2023/12/10-1.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2023/12/34-1.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2023/12/03-1.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2023/12/09-1.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2023/12/29-1.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2023/12/13-1.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2023/12/14-1.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2023/12/31-1.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2023/12/30-1.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2023/12/06-1.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2023/12/41.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2023/12/36-1.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2023/12/39-1.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2023/12/01-1.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2023/12/44.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2023/12/37-1.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2023/12/28-1.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2023/12/46.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2023/12/24-1.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2023/12/38-1.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2023/12/33-1.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2023/12/08-1.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2023/12/32-1.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2023/12/02-1.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2023/12/07-1.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2023/12/05-1.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2023/12/40.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2023/12/42.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2023/12/04-1.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2023/12/23-1.jpg?fit=800%2C800&ssl=1']],
  'Febrero 2024': [['https://i0.wp.com/avovite.com/wp-content/uploads/2024/02/1010.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2024/02/011.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2024/02/022.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2024/02/066.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2024/02/099.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2024/03/f.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2024/03/g.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2024/03/b.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2024/03/d.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2024/03/c.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2024/03/E.jpg?fit=800%2C800&ssl=1']],
  'Marzo 2024': [['https://i0.wp.com/avovite.com/wp-content/uploads/2024/04/01.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2024/04/02.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2024/04/03.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2024/04/04.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2024/04/05.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2024/04/06.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2024/04/07.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2024/04/08.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2024/04/09.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2024/04/10.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2024/04/11.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2024/04/12.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2024/04/13.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2024/04/14.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2024/04/15.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2024/04/16.jpg?fit=800%2C800&ssl=1']],
  'Abril 2024': [['https://i0.wp.com/avovite.com/wp-content/uploads/2024/04/1.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2024/04/2.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2024/04/3.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2024/04/4.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2024/04/5.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2024/04/6.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2024/04/7.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2024/04/8.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2024/04/9.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2024/04/010.jpg?fit=800%2C800&ssl=1']],
  'Mayo 2024': [['https://i0.wp.com/avovite.com/wp-content/uploads/2024/06/Sin-titulo-1-06.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2024/06/Sin-titulo-1-05.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2024/06/Sin-titulo-1-04.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2024/06/Sin-titulo-1-03.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2024/06/Sin-titulo-1-02.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2024/06/Sin-titulo-1-01.jpg?fit=800%2C800&ssl=1']],
  'Junio 2024': [['https://i0.wp.com/avovite.com/wp-content/uploads/2024/06/Sin-titulo-1_Mesa-de-trabajo-1.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2024/06/Sin-titulo-1-02-1.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2024/06/Sin-titulo-1-03-1.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2024/06/Sin-titulo-1-04-1.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2024/06/Sin-titulo-1-05-1.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2024/06/Sin-titulo-1-06-1.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2024/06/Sin-titulo-1-07.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2024/06/Sin-titulo-1-08.jpg?fit=800%2C800&ssl=1']],
  'Julio 2024': [['https://i0.wp.com/avovite.com/wp-content/uploads/2024/09/Web-Agosto-01.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2024/09/Web-Agosto-02.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2024/09/Web-Agosto-03.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2024/09/Web-Agosto-04.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2024/09/Web-Agosto-05.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2024/09/Web-Agosto-06.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2024/09/Web-Agosto-07.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2024/09/Web-Agosto-08.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2024/09/Web-Agosto-09.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2024/09/Web-Agosto-10.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2024/09/Web-Agosto-11.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2024/09/Web-Agosto-12.jpg?fit=800%2C800&ssl=1']],
  'Agosto 2024': [['https://i0.wp.com/avovite.com/wp-content/uploads/2024/09/Web-Agosto-01-1.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2024/09/Web-Agosto-02-1.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2024/09/Web-Agosto-03-1.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2024/09/Web-Agosto-04-1.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2024/09/Web-Agosto-05-1.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2024/09/Web-Agosto-06-1.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2024/09/Web-Agosto-07-1.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2024/09/Web-Agosto-08-1.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2024/09/Web-Agosto-09-1.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2024/09/Web-Agosto-10-1.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2024/09/Web-Agosto-11-1.jpg?fit=800%2C800&ssl=1', 'https://i0.wp.com/avovite.com/wp-content/uploads/2024/09/Web-Agosto-12-1.jpg?fit=800%2C800&ssl=1']],
};

const videos = {
  'Agosto 2024': [
    ['https://via.placeholder.com/500', 'https://via.placeholder.com/500'],
    ['https://via.placeholder.com/500', 'https://via.placeholder.com/500'],
  ],
  'Septiembre 2024': [['https://via.placeholder.com/500', 'https://via.placeholder.com/500', 'https://via.placeholder.com/500', 'https://via.placeholder.com/500'], []],
};

const Archive = () => {
  const [activeView, setActiveView] = useState('images');
  const [selectedMonth, setSelectedMonth] = useState(7);
  const [selectedYear, setSelectedYear] = useState(2024);
  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 6;

  const handleViewChange = (view) => setActiveView(view);
  const handleMonthChange = (index) => {
    setSelectedMonth(index);
  };
  const currentMonth = months[selectedMonth];
  const archiveTitle = `Archivo de ${currentMonth} ${selectedYear}`;
  const monthImages = images[`${currentMonth} ${selectedYear}`] || [];

  const pageImages = monthImages.flat().slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  const renderImages = () => {
    const imageCount = monthImages.flat().length;

    return (
      <div className='flex flex-col items-center gap-4 mt-3'>
        <div className='flex flex-wrap gap-2 justify-center w-full'>
          {imageCount === 1 && <img src={monthImages[0][0]} alt='Image 1' className='w-[90%] sm:w-[45%] h-[300px] object-cover rounded-3xl' />}
          {imageCount === 2 && monthImages.flat().map((imgSrc, idx) => <img key={idx} src={imgSrc} alt={`Image ${idx + 1}`} className='w-[90%] sm:w-[45%] h-[300px] object-cover rounded-3xl' />)}
          {imageCount === 3 && (
            <>
              <div className='flex flex-wrap w-full gap-2 justify-center'>
                {monthImages
                  .flat()
                  .slice(0, 2)
                  .map((imgSrc, idx) => (
                    <img key={idx} src={imgSrc} alt={`Image ${idx + 1}`} className='w-[90%] sm:w-[45%] h-[300px] object-cover rounded-3xl' />
                  ))}
              </div>
              <img src={monthImages.flat()[2]} alt='Image 3' className='w-full h-[300px] object-cover mt-2 rounded-3xl' />
            </>
          )}
          {imageCount === 4 && monthImages.flat().map((imgSrc, idx) => <img key={idx} src={imgSrc} alt={`Image ${idx + 1}`} className='w-[90%] sm:w-[45%] h-[300px] object-cover rounded-3xl' />)}
          {imageCount === 5 && (
            <>
              <img src={monthImages[0][0]} alt='Image 1' className='w-[90%] sm:w-[45%] h-[300px] object-cover rounded-3xl' />
              <div className='grid gap-2 w-[90%] sm:w-[45%] sm:grid-cols-2'>
                {monthImages
                  .flat()
                  .slice(1)
                  .map((imgSrc, idx) => (
                    <img key={idx} src={imgSrc} alt={`Image ${idx + 2}`} className='w-full h-[150px] object-cover rounded-3xl' />
                  ))}
              </div>
            </>
          )}
          {imageCount > 5 && (
            <div className='flex flex-wrap gap-2 mt-3 justify-center'>
              {pageImages.map((imgSrc, idx) => (
                <img key={idx} src={imgSrc} alt={`Image ${idx + 1}`} className='w-[90%] sm:w-[45%] h-[300px] object-cover rounded-3xl' />
              ))}
            </div>
          )}
        </div>
        <div className='flex justify-center w-full mt-5'>
          <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 0} className='mr-2 px-4 py-2 bg-gray-300 hover:bg-gray-400 text-black rounded disabled:opacity-50 disabled:cursor-not-allowed'>
            Anterior
          </button>
          <button onClick={() => setCurrentPage(currentPage + 1)} disabled={(currentPage + 1) * itemsPerPage >= imageCount} className='px-4 py-2 bg-gray-300 hover:bg-gray-400 text-black rounded disabled:opacity-50 disabled:cursor-not-allowed'>
            Siguiente
          </button>
        </div>
      </div>
    );
  };

  const renderVideos = (monthVideos) => {
    const videoCount = monthVideos.flat().length;
    return (
      <div className='flex flex-wrap gap-2 mt-3'>
        {videoCount === 1 && <video src={monthVideos[0][0]} controls className='w-[45%] h-[300px] object-cover'></video>}
        {videoCount === 2 && monthVideos.flat().map((videoSrc, idx) => <video key={idx} src={videoSrc} controls className='w-[45%] h-[300px] object-cover'></video>)}
        {videoCount === 3 && (
          <>
            <div className='flex w-full gap-2'>
              {monthVideos
                .flat()
                .slice(0, 2)
                .map((videoSrc, idx) => (
                  <video key={idx} src={videoSrc} controls className='w-[45%] h-[300px] object-cover'></video>
                ))}
            </div>
            <video src={monthVideos.flat()[2]} controls className='w-full h-[300px] object-cover mt-2'></video>
          </>
        )}
        {videoCount === 4 && monthVideos.flat().map((videoSrc, idx) => <video key={idx} src={videoSrc} controls className='w-[45%] h-[300px] object-cover'></video>)}
        {videoCount === 5 && (
          <>
            <video src={monthVideos[0][0]} controls className='w-[45%] h-[300px] object-cover'></video>
            <div className='grid grid-cols-2 gap-2 w-[45%]'>
              {monthVideos
                .flat()
                .slice(1)
                .map((videoSrc, idx) => (
                  <video key={idx} src={videoSrc} controls className='w-full h-[150px] object-cover'></video>
                ))}
            </div>
          </>
        )}
      </div>
    );
  };

  const renderContent = () => {
    const currentMonth = months[selectedMonth];
    const archiveTitle = `Archivo de ${currentMonth} ${selectedYear}`;
    const monthImages = images[`${currentMonth} ${selectedYear}`] || [];
    const monthVideos = videos[`${currentMonth} ${selectedYear}`] || [];

    if (activeView === 'images') {
      return renderImages(monthImages);
    } else if (activeView === 'videos') {
      return renderVideos(monthVideos);
    }
  };

  return (
    <div className='p-5 max-w-6xl mx-auto'>
      <div className='flex justify-between items-center'>
        <div className='flex'>
          <button
            onClick={() => handleViewChange('images')}
            className={`w-[215.5px] h-[52px] p-[14px_10px] 
              ${activeView === 'images' ? 'bg-[#214820] text-[#F9E988]' : 'bg-[#F5F5F5] text-[#214820]'} 
              rounded-t-lg`}>
            Imágenes
          </button>
          {/* <Button
            onClick={() => handleViewChange("videos")}
            sx={{
              width: "215.5px",
              height: "52px",
              padding: "14px 10px",
              backgroundColor: activeView === "videos" ? "#214820" : "#F5F5F5",
              color: activeView === "videos" ? "#F9E988" : "#214820",
              borderRadius: "0px 8px 0px 0px",
            }}
          >
            Videos
          </Button> */}
        </div>

        <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)} class='w-[215.5px] h-[52px] px-2 py-3 bg-[#F5F5F5] text-[#212121] rounded-lg'>
          {[2022, 2023, 2024].map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <div class='flex overflow-x-auto mt-5'>
        {months.map((month, index) => (
          <button
            key={month}
            onClick={() => handleMonthChange(index)}
            className={`px-4 py-2 ${selectedMonth === index ? 'font-bold text-[#214820]' : 'text-[#212121]'}`}>
            {month}
          </button>
        ))}
      </div>

      <h1 class='text-[48px] font-bold leading-[57.6px] tracking-[-0.02em] text-left text-[#212121] mt-5'>{archiveTitle}</h1>

      {/* Content */}
      {renderContent()}
    </div>
  );
};

export default Archive;
