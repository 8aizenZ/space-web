import Image from "next/image";
import Cosmos from "@/app/pictures/cosmos.jpeg";
import { SparklesCore } from "@/components/sparkles";
import Spacecrafts from "../components/spacecrafts";
import React from "react";

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
        <section className="bg-slate-950/50 relative h-96 w-full">
          <div className="flex flex-col items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-4">
            <h1 className="text-2xl md:text-4xl font-semibold text-center grow">
              Люблю Космос за то,
              <br /> что там даже пыль — звездная…
            </h1>
            <div className="absolute  -bottom-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute  -bottom-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute  -bottom-1 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute  -bottom-1 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
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
          <p className="text-xl text-slate-950 py-10">
            На нашем сайте вы найдете информацию о самых знаменитых космических
            аппаратах, таких как &quot;Аполлон-11&quot;, который доставил людей
            на поверхность Луны, и &quot;Вояджер-1&quot;, который продолжает
            исследовать через свои путешествия границы Солнечной системы.
          </p>
        </section>
        <Spacecrafts />
        <section className="backdrop-blur-2xl p-4 bg-slate-100 flex justify-center items-center rounded-t-2xl">
          <h1 className="text-xl font-extrabold text-slate-950 py-10">
            Кто же придумал космические аппараты?
          </h1>
        </section>
        <section className="backdrop-blur-2xl p-4 bg-slate-200 flex justify-center items-center">
          <h1 className="text-xl text-slate-950 whitespace-pre-wrap px-4 prose">
            Цилковский Константин Эдуадович — российский и советский
            учёный-самоучка, разрабатывавший теоретические вопросы космонавтики,
            мыслитель эзотерической ориентации, занимавшийся философскими
            проблемами освоения космоса. Циолковский обосновал также
            использование ракет для полётов в космос, ещё в 1920-е годы пришёл к
            выводу о необходимости использования «ракетных поездов» — прототипов
            многоступенчатых ракет; осмысливал вопросы выживания человека в
            невесомости при длительных космических перелётах. Основные его
            научные труды — по аэронавтике, ракетодинамике и космонавтике —
            начинались с попытки использовать математический аппарат для решения
            фантастических задач. Множество исследователей, в том числе Я.
            Перельман, характеризовали Циолковского как мыслителя, существенно
            опередившего своё время
          </h1>
        </section>
        <section className="backdrop-blur-2xl p-4 bg-slate-100 flex justify-center items-center mt-20 rounded-t-2xl">
          <h1 className="text-2xl font-extrabold text-slate-950 py-4">
            Что же нас ждет в будущем?
          </h1>
        </section>
        <section className="backdrop-blur-2xl p-4 bg-slate-200 flex justify-center items-center">
          <p className="text-xl text-slate-950 whitespace-pre-wrap px-4 prose">
            В будущем космические аппараты будут продолжать играть важную роль в
            исследовании космоса и понимании нашей Вселенной. Постоянно
            развивающиеся технологии и научные достижения позволят создавать
            более продвинутые и эффективные космические аппараты. Например,
            миссии на Марс станут более распространенными, и мы узнаем больше о
            возможной жизни на этой планете. Расширится сфера применения
            космических аппаратов для изучения других планет и их спутников, а
            также астероидов и комет. 
            Однако следует отметить, что будущее
            космических аппаратов сильно зависит от наших научных и
            технологических достижений, а также от политических и экономических
            факторов. Все эти аспекты могут повлиять на направление и масштабы
            развития космической индустрии.
          </p>
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
