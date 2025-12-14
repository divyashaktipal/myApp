import { BlurInText } from "@/components/ui/blur-in-text";
export default function About() {
  return (
    <div className="bg-background min-h-screen">
      <BlurInText text="This is About Us Page!" />
      <p className="mt-4 text-lg font-semibold text-gray-700 mb-4 ">
        This is the content of the About Us page. Lorem ipsum, dolor sit amet
        consectetur adipisicing elit. Voluptatem, officia! Id possimus eligendi
        eveniet cumque corporis veniam amet vel, mollitia natus ex a architecto
        fugit consequatur saepe tempora voluptate reiciendis.
      </p>
    </div>
  );
}
