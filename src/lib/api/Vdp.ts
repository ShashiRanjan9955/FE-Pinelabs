
export async function fetchVDP() {
    try {
      const res = await fetch(`${(process.env.NEXT_PUBLIC_PINELABS_URL)}/wp-json/wp/v2/pages/103`, {
        cache: "no-cache",
      });
  
      if (!res.ok) {
        throw new Error(`Failed to fetch Vdp data. Status: ${res.status}`);
      }
  
      const datas = await res.json();
      return datas;
    } catch (error) {
      console.error("Error fetching Vdp data:", error);
      return null;
    }
  }
  