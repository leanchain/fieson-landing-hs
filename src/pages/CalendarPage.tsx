import React, { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { Helmet } from "react-helmet-async";

const CalendarPage: React.FC = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ "namespace": "session-bart" });
      cal("ui", { "theme": "light", "hideEventTypeDetails": false, "layout": "month_view" });
    })();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12">
      <Helmet>
        <title>Book a Demo - Fieson AI</title>
        <meta name="description" content="Schedule a demo with Fieson AI to see our AI-powered solutions in action." />
      </Helmet>
      <h1 className="text-4xl font-bold mb-8">Schedule Your Demo</h1>
      <div className="w-full max-w-4xl h-[700px] shadow-lg rounded-lg overflow-hidden">
        <Cal
          namespace="session-bart"
          calLink="bart-rosier/session-bart"
          style={{ width: "100%", height: "100%", overflow: "hidden" }}
          config={{ "layout": "month_view", "theme": "light" }}
        />
      </div>
    </div>
  );
};

export default CalendarPage;
