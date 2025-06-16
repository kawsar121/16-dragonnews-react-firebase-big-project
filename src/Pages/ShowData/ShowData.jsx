


const ShowData = ({ news }) => {
  return (
    <div className=" max-w-md p-11 bg-base-100 shadow-xl">
      <figure>
        <img src={news.thumbnail_url} alt={news.title} className="w-80 h-80 mx-auto  object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title items-start text-lg font-bold">{news.title}</h2>
        <div className="flex items-center gap-3 mt-2">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src={news.author.img} alt={news.author.name} />
            </div>
          </div>
          <div>
            <p className="font-medium">{news.author.name}</p>
            <p className="text-sm text-gray-500">{new Date(news.author.published_date).toDateString()}</p>
          </div>
        </div>

        <div className="flex justify-between items-center text-sm mt-4">
          <span className="badge badge-outline text-blue-600">{news.rating.badge}</span>
          <span className="text-gray-500">Views: {news.total_view}</span>
        </div>

        <div className="card-actions justify-end mt-4">
          <button className="btn btn-sm btn-primary">Read More</button>
        </div>
      </div>
    </div>
  );
};


export default ShowData;