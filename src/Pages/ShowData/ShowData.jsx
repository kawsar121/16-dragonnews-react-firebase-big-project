import { Link } from "react-router-dom";



const ShowData = ({ newsData }) => {
  return (
    <div className=" max-w-md p-11 bg-base-100 shadow-xl">
      <figure>
        <img src={newsData.thumbnail_url} alt={newsData.title} className="w-80 h-80 mx-auto  object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title items-start text-lg font-bold">{newsData.title}</h2>
        <div className="flex items-center gap-3 mt-2">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src={newsData.author.img} alt={newsData.author.name} />
            </div>
          </div>
          <div>
            <p className="font-medium">{newsData.author.name}</p>
            <p className="text-sm text-gray-500">{new Date(newsData.author.published_date).toDateString()}</p>
          </div>
        </div>

        <div className="flex justify-between items-center text-sm mt-4">
          <span className="badge badge-outline text-blue-600">{newsData.rating.badge}</span>
          <span className="text-gray-500">Views: {newsData.total_view}</span>
        </div>

        <div className="card-actions justify-end mt-4">
          <Link to={`/newsData/${newsData._id}`} className="btn btn-sm btn-primary">Read More</Link>
        </div>
      </div>
    </div>
  );
};


export default ShowData;