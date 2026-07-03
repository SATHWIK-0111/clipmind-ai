function RecentUploads() {

  return (

    <div className="recent-uploads">

      <h2>Recent Uploads</h2>

      <table>

        <thead>

          <tr>

            <th>Video</th>

            <th>Status</th>

            <th>Date</th>

          </tr>

        </thead>

        <tbody>

          <tr>

            <td>Machine Learning.mp4</td>

            <td>Completed</td>

            <td>03 Jul</td>

          </tr>

          <tr>

            <td>AI Seminar.mp4</td>

            <td>Processing</td>

            <td>02 Jul</td>

          </tr>

          <tr>

            <td>DL Lecture.mp4</td>

            <td>Completed</td>

            <td>01 Jul</td>

          </tr>

        </tbody>

      </table>

    </div>

  );

}

export default RecentUploads;