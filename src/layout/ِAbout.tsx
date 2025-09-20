import Image from "../components/Image"

export default function About() {


  return <section id="about" className="px-5 space-y-10 text-center md:space-y-16 lg:space-y-20">
    <p dir="rtl" className="text-2xl font-sub-ar
      text-shadow-lg max-w-120 mx-auto lg:text-3xl lg:max-w-140">شخص متواضع ولطيف,
      حقيقي وصريح, محبوب وفصيح, رقيق, مراعي وحنون. يعيش بوجود الاخرين, بس يحتاج وقتة الخاص. سعيد وبشوش, بس يميل للاكتئاب. هادئ بشدة ويدخل الكلب بسرعة.</p>
    <div className="flex justify-center items-center
      gap-4 flex-col">
      <Image path="real_fatima" extention="png" style="rounded-full
        size-44 lg:size-54  border-accent border-2" />
      <h3 className="text-xl font-sub font-bold lg:text-2xl">This is me</h3>
    </div>

  </section>
}
