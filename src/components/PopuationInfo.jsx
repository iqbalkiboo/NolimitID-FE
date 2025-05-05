import React, { useEffect } from "react";
import usePopulationStore from "../store/usePopulationStore";

export default function PopuationInfo() {
  const { source, fetchPopulationData, loading } = usePopulationStore();

  useEffect(() => {
    fetchPopulationData();
  }, [fetchPopulationData]);

  console.log(source);

  const {
    annotations: {
      source_name,
      source_description,
      dataset_name,
      dataset_link,
      topic,
      subtopic,
      table_id,
    },
  } = source;

  if (loading) return <p>Loading data sensus...</p>;
  if (!source) return null;

  return (
    <div className="mb-6 p-6 bg-white rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-xl font-bold mb-2 text-blue-700">Information Sensus</h2>
      <div className="space-y-2 text-sm text-gray-700">
        <p>
          <span className="font-medium text-gray-900">Source:</span>{" "}
          {source_name}
        </p>
        <p>
          <span className="font-medium text-gray-900">Description:</span>{" "}
          {source_description}
        </p>
        <p>
          <span className="font-medium text-gray-900">Dataset:</span>{" "}
          <a
            href={dataset_link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            {dataset_name}
          </a>
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <p>
            <span className="font-medium text-gray-900">Topic:</span> {topic}
          </p>
          <p>
            <span className="font-medium text-gray-900">Subtopic:</span>{" "}
            {subtopic}
          </p>
          <p>
            <span className="font-medium text-gray-900">Table ID:</span>{" "}
            {table_id}
          </p>
        </div>
      </div>
    </div>
  );
}
