import Image from "next/image";
import appolon from "@/app/pictures/apolon_11.jpg";
import Luna1 from "@/app/pictures/luna1.jpg";
import Voyager from "@/app/pictures/voyager1.jpg";
import Glileo from "@/app/pictures/galileo.jpg";
import ParkerZond from "@/app/pictures/parkerZond.jpg";
import PionerVenera2 from "@/app/pictures/pioner-venera2.jpg";

export default function Spacecrafts() {
  return (
    <div className="  bg-slate-200 rounded-b-xl mb-20">
      <section className="flex gap-10  p-4 md:flex-row flex-col items-center">
        <Image src={appolon} alt="apollon" className="max-w-96 rounded-xl" />
        <h1 className="text-xl text-slate-950 font-extrabold ">
          &quot;Аполло́н-11&quot; (англ. Apollo 11) — американский пилотируемый
          космический корабль серии «Аполлон», в ходе полёта которого в период с
          16 по 24 июля 1969 года жители Земли впервые в истории совершили
          посадку на поверхность другого небесного тела — Луны. Они оставались
          на поверхности Луны в течение 21 часа 36 минут и 21 секунды.
        </h1>
      </section>
      <section className=" flex gap-10  p-4 md:flex-row flex-col items-center">
        <Image src={Luna1} alt="luna1" className="mt-10 max-w-96 rounded-xl " />
        <h1 className="text-xl text-slate-950 font-extrabold p-4 ">
          «Луна-1» — советская автоматическая межпланетная станция (АМС) для
          изучения Луны и космического пространства. Первый в мире космический
          аппарат, достигший второй космической скорости, преодолевший
          притяжение Земли и ставший искусственным спутником Солнца. 2 января
          1959 осуществлён пуск ракеты-носителя «Восток-Л», которая вывела на
          траекторию полёта к Луне АМС «Луна-1». Это была траектория сближения.В
          массовой советской печати того времени эта АМС называлась «первая
          советская космическая ракета». Станция также имела названия «Луна-1Д»
          и «Мечта».
        </h1>
      </section>
      <section className="flex gap-10  p-4 md:flex-row flex-col items-center">
        <Image
          src={Voyager}
          alt="voyager1"
          className="mt-10 max-w-96 rounded-xl"
        />
        <h1 className="text-xl text-slate-950 font-extrabold p-4">
          «Вояджер-1» (англ. Voyager-1) — американский космический зонд,
          исследующий Солнечную систему с 5 сентября 1977 года. Основная миссия
          космической программы «Вояджер» заключалась в исследовании Юпитера и
          Сатурна. «Вояджер-1» стал первым космическим зондом, который сделал
          детальные снимки спутников этих планет. По завершении основной миссии
          он приступил к выполнению дополнительной миссии по исследованию
          отдалённых регионов Солнечной системы, включая пояс Койпера и границу
          гелиосферы.
        </h1>
      </section>
      <section className="flex gap-10  p-4 md:flex-row flex-col items-center">
        <Image
          src={Glileo}
          alt="Glileo"
          className="mt-10 max-w-96 rounded-xl"
        />
        <h1 className="text-xl text-slate-950 font-extrabold p-4">
          «Галилео» (англ. Galileo) — автоматический космический аппарат (АМС)
          НАСА, созданный для исследования Юпитера и его спутников. Назван в
          честь Галилео Галилея, открывшего четыре крупнейших спутника Юпитера в
          1610 году. Аппарат был запущен в 1989 году, в 1995 году вышел на
          орбиту Юпитера, проработав там до 2003 года[2]. Это был первый
          аппарат, вышедший на орбиту Юпитера, изучавший планету длительное
          время, а также сбросивший в её атмосферу спускаемый зонд. Станция
          передала свыше 30 гигабайт информации, включая 14 тысяч изображений
          планеты и спутников, а также уникальную информацию об атмосфере
          Юпитера.
        </h1>
      </section>
      <section className="flex gap-10  p-4 md:flex-row flex-col items-center">
        <Image
          src={ParkerZond}
          alt="ParkerZond"
          className="mt-10 max-w-96 rounded-xl"
        />
        <h1 className="text-xl text-slate-950 font-extrabold p-4">
          Со́лнечный зонд «Па́ркер» (англ. Parker Solar Probe, ранее также Solar
          Probe, Solar Probe Plus или Solar Probe+) — автоматический космический
          аппарат НАСА для изучения внешней короны Солнца. Предполагается, что
          он приблизится к «поверхности» Солнца (фотосфере) на расстояние 8,86
          радиуса Солнца (6,2 миллиона километров.).Зонд назван в честь
          американского астрофизика Юджина Паркера[3], в 1958 году
          предсказавшего существование солнечного ветра. На 2023 год «Паркер»
          является достигшим самой высокой скорости и прошедшим ближе всего от
          Солнца рукотворным объектом (в перигелии 27 сентября 2023 года
          достигнута гелиоцентрическая скорость 176,5 км/с и расстояние 7,26 млн
          км от солнечной поверхности)
        </h1>
      </section>
      <section className="flex gap-10  p-4 md:flex-row flex-col items-center">
        <Image
          src={PionerVenera2}
          alt="pioner2"
          className="mt-10 max-w-96 rounded-xl"
        />
        <h1 className="text-xl text-slate-950 font-extrabold p-4">
          Пионер-Венера-2 — автоматическая межпланетная станция НАСА, запущенная
          8 августа 1978 года с целью изучения Венеры. Станция несла четыре
          спускаемых аппарата, которые успешно выполнили свою миссию.
          Официальное название — Pioneer Venus Multiprobe, в документах НАСА
          станция фигурировала также в качестве Pioneer Venus 2 и Pioneer
          13.Станция состояла из траекторного модуля и расположенных на нём
          спускаемых аппаратов — одного «Большого зонда» (Large Probe) и трёх
          идентичных «маленьких» (small probes): «Север» (North Probe), «День»
          (Day Probe) и «Ночь» (Night Probe)[1]. Масса траекторного модуля
          составляла 290 кг, масса «большого» аппарата — 315 кг, масса каждого
          из «маленьких» — 90 кг.
        </h1>
      </section>
    </div>
  );
}
