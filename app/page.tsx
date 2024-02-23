import Image from "next/image";
import Cosmos from "@/app/cosmos.jpeg";
import appolon from"@/app/apolon_11.jpg";

export default function Home() {
  return (
    <main className="bg-background flex justify-center ">
      <div className="z-10 w-full">
        <div className="backdrop-blur-2xl bg-slate-100/15 flex justify-center items-center h-32">
          <h1 className="text-3xl font-extrabold py-2 text-center">
            Добро пожаловать на наш сайт, посвященный увлекательному миру
            космических аппаратов!
          </h1>
        </div>
        <div className="backdrop-blur-2xl bg-slate-100 flex justify-center items-center mt-96">
          <h1 className="text-3xl font-extrabold text-center text-slate-950 py-10">
            На нашем сайте вы найдете информацию о самых знаменитых космических
            аппаратах, таких как "Аполлон-11", который доставил людей на
            поверхность Луны, и "Вояджер-1", который продолжает исследовать
            через свои путешествия границы Солнечной системы. Мы расскажем вам о
            невероятных достижениях космической технологии и передовых
            инженерных решениях, благодаря которым смогли быть возможными эти
            удивительные путешествия.
          </h1>
        </div>
        <div>
          <h1>
          «Аполло́н-11» (англ. Apollo 11) — американский пилотируемый космический корабль серии «Аполлон», в ходе полёта которого в период с 16 по 24 
          июля 1969 года жители Земли впервые в истории совершили посадку на поверхность другого небесного тела — Луны.Перейти к разделу «#Первая посадка людей на Луну»
          </h1>
        </div>
      <Image
        src={appolon}
        alt="apollon"
        className="max-w-96 ml-20 mt-10 rounded-xl"
        />
      </div>
      <Image
        src={Cosmos}
        alt="bg-cosmos"
        className="object-cover w-screen h-screen fixed top-0 left-0"
      />
    </main>
  );
}
