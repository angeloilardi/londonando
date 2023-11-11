import Script from "next/script";

export default function AboutMe() {
    return (
      <>
        <Script
          src="https://static.elfsight.com/platform/platform.js"
          data-use-service-core
          defer
        />
        <div className="p-20">
          <div className="elfsight-app-fb710219-8601-424c-a299-7a8b954c1451 p-20 bg-black" />
        </div>
      </>
    );
}
