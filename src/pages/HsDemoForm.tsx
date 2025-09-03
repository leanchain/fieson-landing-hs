import React, { useEffect } from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import SeoHead from "@/components/SeoHead";
import useAnalytics from "@/hooks/use-analytics";
import useBookDemo from "@/hooks/use-book-demo";

const HsDemoForm: React.FC = () => {
  const { trackEvent } = useAnalytics();
  const { handleBookDemoClick } = useBookDemo({ label: "Start Your Free Pilot - Form Demo" });

  useEffect(() => {
    // Load Wistia player script
    const script1 = document.createElement("script");
    script1.src = "https://fast.wistia.com/player.js";
    script1.async = true;
    document.body.appendChild(script1);

    // Load Wistia embed script
    const script2 = document.createElement("script");
    script2.src = "https://fast.wistia.com/embed/3jpb6fhf74.js";
    script2.async = true;
    script2.type = "module";
    document.body.appendChild(script2);

    // Inject Wistia style
    const style = document.createElement("style");
    style.innerHTML = `wistia-player[media-id='3jpb6fhf74']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/3jpb6fhf74/swatch'); display: block; filter: blur(5px); padding-top:221.94%; }`;
    document.head.appendChild(style);

    // Wistia video play tracking
    window._wq = window._wq || [];
    window._wq.push({
      id: "3jpb6fhf74",
      onReady: function(video: any) {
        video.bind("play", function() {
          trackEvent({
            action: "video_play",
            category: "Demo Video",
            label: "Form Demo Video Play",
          });
          return video.unbind; // Unbind to avoid multiple events
        });
      },
    });

    return () => {
      // Clean up scripts and style on component unmount
      document.body.removeChild(script1);
      document.body.removeChild(script2);
      document.head.removeChild(style);
    };
  }, [trackEvent]);


  return (
    <div className="min-h-screen bg-background">
      <SeoHead
        title="Fieson AI - Form Demo"
        description="Explore Fieson AI's form automation for home services. See how our AI streamlines data collection and lead management."
      />
      <div className="w-1/2 mx-auto">
        <Header />
      </div>
      <main className="py-16 flex-grow flex flex-col justify-center items-center">
        <section className="bg-background flex-grow overflow-y-auto w-full">
          <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center flex flex-col h-full justify-center">
            {/* Wistia Video Embed */}
            <div className="flex justify-center mb-8 min-h-0 flex-grow items-center">
              <div className="w-full max-w-2xl h-[82vh] flex items-center justify-center overflow-hidden">
                <wistia-player
                  media-id="3jpb6fhf74"
                  seo="false"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                ></wistia-player>
              </div>
            </div>

            {/* Book Demo Button */}
            <div className="flex justify-center flex-shrink-0">
              <Button
                onClick={handleBookDemoClick}
                className="flex w-full items-center justify-center px-4 py-2 text-base sm:px-8 sm:py-8 sm:text-lg font-semibold text-white bg-gradient-to-r from-purple-700 to-purple-900 hover:from-purple-800 hover:to-purple-950 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                👉 Start Your Free Pilot
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HsDemoForm;
