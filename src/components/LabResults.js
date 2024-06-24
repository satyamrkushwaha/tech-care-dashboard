import React from 'react';

const LabResults = () => {
    const results = [
      { name: "Blood Tests", link: "#" },
      { name: "CT Scans", link: "#" },
      { name: "Radiology Reports", link: "#" },
      { name: "X-Rays", link: "#" },
      { name: "Urine Test", link: "#" },
      { name: "Blood Tests", link: "#" },
      { name: "CT Scans", link: "#" },
      { name: "Radiology Reports", link: "#" },
      { name: "X-Rays", link: "#" },
      { name: "Urine Test", link: "#" },
    ];

    return (
        <div className='lab-results-container'>
         <h2>Lab Results</h2>
            <div className="lab-results">
                <ul>
                    {results.map((result, index) => (
                        <li key={index}>
                            <span>{result.name}</span>
                            <a href={result.link} download>

                            </a>
                        </li>
                    ))}
                </ul>
            </div>

        </div>

    );
}

export default LabResults;