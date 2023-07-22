import React, { useEffect,useState } from "react";
import axios from "axios";

const NumberManagement = () => {
  const [mergedNumbers, setMergedNumbers] = useState([]);

  useEffect(() => {
    const fetchMergedNumbers = async () => {
      const urls = [
        "http://20.244.56.144/numbers/primes",
        "http://20.244.56.144/numbers/fibo",
        "http://20.244.56.144/numbers/odd",
      ];

      try {
        const response = await axios.get("http://localhost:8008/numbers", {
          params: { url: urls },
        });
        setMergedNumbers(response.data.numbers);
      } catch (error) {
        console.error("Error fetching merged numbers:", error.message);
      }
    };

    fetchMergedNumbers();
  }, []);

  return (
    <div>
      <h1>Merged Unique Numbers</h1>
      <ul>
        {mergedNumbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </div>
  );
};

export default NumberManagement;
