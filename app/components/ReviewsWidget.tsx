import Script from "next/script";

export default function AboutMe() {
  return (
    <>
      <Script
        src="https://static.elfsight.com/platform/platform.js"
        data-use-service-core
        defer
      />
      <h3 className="text-center text-3xl text-accent bg-primary-light p-4 pt-24 dark:bg-gray-800 dark:text-white">
        RECENSIONI
      </h3>
      <div className="elfsight-app-fb710219-8601-424c-a299-7a8b954c1451 p-10 bg-primary-light dark:bg-gray-800 snap-start"></div>
    </>
  );
}
