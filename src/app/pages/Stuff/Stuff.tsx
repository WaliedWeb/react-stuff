import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailCard from '../../components/DetailCard/DetailCard';
import type { Thing } from '../../types';

export default function Stuff(): JSX.Element {
  const thingParams = useParams();
  const [thing, setThing] = useState<Thing | null>();

  useEffect(() => {
    async function fetchThings() {
      const response = await fetch(
        `https://json-server.neuefische.de/stuff/${thingParams.stuff}`
      );
      const fetchedThings = await response.json();
      setThing(fetchedThings);
    }
    fetchThings();
  }, []);

  return (
    <div>
      {thing && (
        <DetailCard
          name={thing?.name}
          description={thing?.description}
          categories={thing?.categories}
        />
      )}
    </div>
  );
}
