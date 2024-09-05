import axios from 'axios';
import { useEffect, useState } from 'react';
import { countries } from '../../data/country';

function Interpol() {
  const [forename, setForename] = useState('');
  const [lastName, setLastName] = useState('');
  const [nationality, setNationality] = useState('');
  const [redNoticeDetails, setRedNoticeDetails] = useState([]);
  const [selectedNoticeId, setSelectedNoticeId] = useState(null);
  const [noticeImages, setNoticeImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedNotice, setSelectedNotice] = useState(null);


  useEffect(() => {
    if (forename && lastName ) {
      const fetchData = async () => {
        setLoading(true);
        setNoticeImages([]); // Clear images from previous searches
        setSelectedNoticeId(null); // Reset the selected notice
        try {
          const response = await axios.get(`https://ws-public.interpol.int/notices/v1/red`, {
            params: { forename, name: lastName, nationality }
          });
          if (response.data && response.data._embedded && response.data._embedded.notices) {
            setRedNoticeDetails(response.data._embedded.notices);
          } else {
            setRedNoticeDetails([]);
          }
          setError('');
        } catch (err) {
          setError('Failed to fetch data');
          setRedNoticeDetails([]);
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }
  }, [forename, lastName, nationality]);

  useEffect(() => {
    if (selectedNoticeId) {

      const fetchImages = async () => {
        try {
          const imgResponse = await axios.get(`https://ws-public.interpol.int/notices/v1/red/${encodeURIComponent(selectedNoticeId)}/images`);
          if (imgResponse.data && imgResponse.data._embedded && imgResponse.data._embedded.images) {
            setNoticeImages(imgResponse.data._embedded.images);
          }
        } catch (error) {
          console.error('Failed to fetch images', error);
          setNoticeImages([]);
        }
      };

      const fetchNoticeDetails = async () => {
        setLoading(true);
        try {
          const detailsResponse = await axios.get(`https://ws-public.interpol.int/notices/v1/red/${encodeURIComponent(selectedNoticeId)}`);
          setSelectedNotice(detailsResponse.data);
        //   setImages(imagesResponse.data._embedded.images);
        } catch (err) {
          setError('Failed to fetch notice details');
        } finally {
          setLoading(false);
        }
      };

      fetchNoticeDetails();
      fetchImages();
    }
  }, [selectedNoticeId]);

  return (
    <div>
      <h1>Interpol Red Notice Check</h1>
      <input
        type="text"
        placeholder="Enter forename"
        value={forename}
        onChange={e => setForename(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter last name"
        value={lastName}
        onChange={e => setLastName(e.target.value)}
      />
      <select value={nationality} onChange={e => setNationality(e.target.value)}>
        <option value="">Select Nationality</option>
        {countries.map((country, index) => (
          <option key={index} value={country['alpha-2']}>{country.name}</option>
        ))}
      </select>
      <button onClick={() => {}}>Check</button>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {redNoticeDetails.length > 0 && (
        <div>
          <h2>Red Notice Details:</h2>
          {redNoticeDetails.map((notice, index) => (
            <div key={index}>
              <p>Name: {notice.name}</p>
              <p>Nationality: {notice.nationalities.join(', ')}</p>
              <p> Birth Date: {notice.date_of_birth}</p>
              <button onClick={() => setSelectedNoticeId(notice.entity_id)}>View More</button>
            </div>
          ))}
          {noticeImages.length > 0 && (
            <div>
              <h3>Images:</h3>
              {noticeImages.map((image, index) => (
                <img key={index} src={image._links.self.href} alt={`Notice Image ${index}`} />
              ))}
            </div>
          )}
        </div>
      )}
      {redNoticeDetails.length === 0 && !loading && <p>No red notices found.</p>}
    </div>
  );
}

export default Interpol;
