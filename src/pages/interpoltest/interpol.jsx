import axios from 'axios';
import  { useEffect, useState } from 'react';

import { countries } from '../../data/country';

function Interpol() {
  const [forename, setForename] = useState('');
  const [lastName, setLastName] = useState('');
  const [nationality, setNationality] = useState('');
  const [redNoticeDetails, setRedNoticeDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (forename && lastName && nationality) {
      const fetchData = async () => {
        setLoading(true);
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
      {/* <input
        type="text"
        placeholder="Enter country code (e.g., DE)"
        value={nationality}
        onChange={e => setNationality(e.target.value)}
      /> */}

        {/* Select nationality  country code is value */}
        <select
        value
        onChange={e => setNationality(e.target.value)}
        >
          <option value={nationality}>Select</option>
            {countries.map((country, index) => (
                <option key={index} value={country['alpha-2']}>
                {country.name}
                </option>
            ))}
        </select>
        


      <button onClick={() => {
        // Optionally, handle button click to trigger fetch
      }}>Check</button>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {redNoticeDetails.length > 0 ? (
        <div>
          <h2>Red Notice Details:</h2>
          {redNoticeDetails.map((notice, index) => (
            <div key={index}>
              <p>Name: {notice.name}</p>
              <p>Nationality: {notice.nationalities.join(', ')}</p>
              {console.log(notice)}
              {/* More details can be added here as needed */}
            </div>
          ))}
        </div>
      ) : (
        <p>No red notices found.</p>
      )}
    </div>
  );
}

export default Interpol;
