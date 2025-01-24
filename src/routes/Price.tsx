import { useQuery } from "@tanstack/react-query";
import { fetchCoinTickers } from "../api";
import styled from "styled-components";

interface IPriceDate {
  quotes: {
    USD: {
      price: number;
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_from_price_ath: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

const PriceInfo = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const PriceItems = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

interface PriceProps {
  coinId?: string;
}

function Price({ coinId }: PriceProps) {
  const { isLoading, data } = useQuery<IPriceDate>({
    queryKey: ["price", coinId],
    queryFn: () => fetchCoinTickers(coinId || ""),
  });
  console.log(data);
  return (
    <>
      {isLoading ? (
        "Loading..."
      ) : (
        <PriceInfo>
          <PriceItems>Price: ${data?.quotes.USD.price}</PriceItems>
          <PriceItems>released date: {data?.quotes.USD.ath_date}</PriceItems>
          <PriceItems>ath price: ${data?.quotes.USD.ath_price}</PriceItems>
          <PriceItems>market cap: ${data?.quotes.USD.market_cap}</PriceItems>
          <PriceItems>
            market cap change 24h: ${data?.quotes.USD.market_cap_change_24h}
          </PriceItems>
          <PriceItems>
            percent change 1h: ${data?.quotes.USD.percent_change_1h}
          </PriceItems>
          <PriceItems>
            percent change 1y: ${data?.quotes.USD.percent_change_1y}
          </PriceItems>
          <PriceItems>
            percent change 6h: ${data?.quotes.USD.percent_change_6h}
          </PriceItems>
          <PriceItems>
            percent change 7d: ${data?.quotes.USD.percent_change_7d}
          </PriceItems>
          <PriceItems>
            percent change 12h: ${data?.quotes.USD.percent_change_12h}
          </PriceItems>
          <PriceItems>
            percent change 15m: ${data?.quotes.USD.percent_change_15m}
          </PriceItems>
          <PriceItems>
            percent change 24h: ${data?.quotes.USD.percent_change_24h}
          </PriceItems>
          <PriceItems>
            percent from price ath: ${data?.quotes.USD.percent_from_price_ath}
          </PriceItems>
          <PriceItems>volume 24h: ${data?.quotes.USD.volume_24h}</PriceItems>
          <PriceItems>
            volume 24h change 24h: ${data?.quotes.USD.volume_24h_change_24h}
          </PriceItems>
        </PriceInfo>
      )}
    </>
  );
}

export default Price;
