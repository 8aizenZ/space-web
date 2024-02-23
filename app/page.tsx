import Image from "next/image";
import Cosmos from "@/app/cosmos.jpeg";
import appolon from "@/app/apolon_11.jpg";
import Luna1 from "@/app/luna1.jpg";
import { SparklesCore } from "@/components/sparkles";

export default function Home() {
  return (
    <main className="bg-background flex justify-normal">
      <div className="z-10 w-full">
        <header className="backdrop-blur-2xl bg-slate-100/15 flex justify-center items-center rounded-b-xl py-2">
          <h1 className="text-2xl font-extrabold py-10 text-center">
            Добро пожаловать на наш сайт, посвященный увлекательному миру
            космических аппаратов!
          </h1>
        </header>
        <section className="bg-slate-950/50 relative h-96">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h1 className="text-5xl font-semibold text-center">
              Люблю Космос за то, что там даже пыль — звездная…
            </h1>
            <div className="absolute inset-x-20 -bottom-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 -bottom-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 -bottom-1 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 -bottom-1 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
          </div>

          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={400}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </section>
        <section className="backdrop-blur-2xl p-4 bg-slate-100 flex justify-center items-center ">
          <h1 className="text-xl font-extrabold text-slate-950 py-10">
            На нашем сайте вы найдете информацию о самых знаменитых космических
            аппаратах, таких как &quot;Аполлон-11&quot;, который доставил людей
            на поверхность Луны, и &quot;Вояджер-1&quot;, который продолжает
            исследовать через свои путешествия границы Солнечной системы. Мы
            расскажем вам о невероятных достижениях космической технологии и
            передовых инженерных решениях, благодаря которым смогли быть
            возможными эти удивительные путешествия.
          </h1>
        </section>
        <section className="flex gap-10 bg-slate-200 p-4 md:flex-row flex-col items-center">
          <Image src={appolon} alt="apollon" className="max-w-96 rounded-xl" />
          <h1 className="text-xl text-slate-950 font-extrabold text-center ">
            &quot;Аполло́н-11&quot; (англ. Apollo 11) — американский пилотируемый
            космический корабль серии «Аполлон», в ходе полёта которого в период
            с 16 по 24 июля 1969 года жители Земли впервые в истории совершили
            посадку на поверхность другого небесного тела — Луны. Они оставались
            на поверхности Луны в течение 21 часа 36 минут и 21 секунды.
          </h1>
        </section>
        <section className=" flex gap-10 bg-slate-200 p-4 md:flex-row flex-col items-center">
          <Image
            src={Luna1}
            alt="luna1"
            className="mt-10 max-w-96 rounded-xl "
          />
          <h1 className="text-xl text-slate-950 font-extrabold text-center p-4 ">
            «Луна-1» — советская автоматическая межпланетная станция (АМС) для
            изучения Луны и космического пространства. Первый в мире космический
            аппарат, достигший второй космической скорости, преодолевший
            притяжение Земли и ставший искусственным спутником Солнца.
            2 января 1959 осуществлён пуск ракеты-носителя «Восток-Л», которая вывела на 
            траекторию полёта к Луне АМС «Луна-1». Это была траектория сближения.В массовой советской печати
             того времени эта АМС называлась «первая советская космическая ракета». Станция также имела названия «Луна-1Д» и «Мечта».
          </h1>
        </section>
      </div>
      <Image
        src={Cosmos}
        alt="bg-cosmos"
        className="object-cover w-screen h-screen fixed top-0 left-0"
      />
    </main>
  );
}
