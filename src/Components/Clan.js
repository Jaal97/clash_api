import axios from "axios";

const PlayerInfo = ({ playerData }) => {
  if (!playerData) {
    return <p>Error fetching player data.</p>;
  }

  return (
    <div>
      pp
    </div>
  );
};

export async function getServerSideProps() {
  const playerTag = "#2LQUJU9YC"; // Use your own Tag
  const apiUrl = `https://api.clashofclans.com/v1/players/${playerTag}`;
  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImZlZmVlYjM2LTRhYTYtNDNlZS1hYjM1LWZiMzI5NDhmZjhiZiIsImlhdCI6MTcxNTM1MTU4Nywic3ViIjoiZGV2ZWxvcGVyL2ExODg4ZmNjLTcxNGYtMzkyYS0wN2U0LTU0OWQ4MzgzZGJjMSIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjE5MC4xMjEuMTU3LjEzNCIsIjE5MC4xMjEuMTU3LjEzMCJdLCJ0eXBlIjoiY2xpZW50In1dfQ.SEpTzDvCH6530E-BBKhG2gPf4CcT2OaSBpnL4O8dJkGmDGCxDYXgBTvfFFLi5eGafDa_hFlnpoOhnUHvKPl3eg"; // Replace with your JWT token

  try {
    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    const playerData = response.data;
    console.log(playerData);
    return {
      props: {
        playerData
      }
    };
  } catch (error) {
    console.error("Error fetching player data:", error);
    return {
      props: {}
    };
  }
}

export default PlayerInfo;