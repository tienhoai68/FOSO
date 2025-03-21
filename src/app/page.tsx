import Banner from "@/components/banner/banner";
import Content from "@/components/content/content";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen ">
      <Banner />
      <div className="flex-grow">
        <Content />
      </div>
    </div>
  );
}
