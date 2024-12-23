import React from "react";
import Slider from "react-slick";

const TestomonialsData = [
  {
    id: 1,
    name: "Victor",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut eaque odio eveniet quam illum nulla saepe esse libero obcaecati soluta ad, veniam consequuntur! Consequatur facere facilis libero ab, ad vitae?",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Satya",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut eaque odio eveniet quam illum nulla saepe esse libero obcaecati soluta ad, veniam consequuntur! Consequatur facere facilis libero ab, ad vitae?",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 1,
    name: "virat-vikram",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut eaque odio eveniet quam illum nulla saepe esse libero obcaecati soluta ad, veniam consequuntur! Consequatur facere facilis libero ab, ad vitae?",
    img: "https://picsum.photos/103/103",
  },
  {
    id: 1,
    name: "Kamlesh",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut eaque odio eveniet quam illum nulla saepe esse libero obcaecati soluta ad, veniam consequuntur! Consequatur facere facilis libero ab, ad vitae?",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Atul",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut eaque odio eveniet quam illum nulla saepe esse libero obcaecati soluta ad, veniam consequuntur! Consequatur facere facilis libero ab, ad vitae?",
    img: "https://picsum.photos/105/105",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    Infinite: true,
    speed: 500,
    slideToscroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slideToShow: 3,
          slideToscroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slideToShow: 2,
          slideToscroll: 1,
          initialSlider: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slideToShow: 1,
          slideToscroll: 1,
        },
      },
    ],
  };
  return (
    <div className="py-10 mb-10">
      <div className="container">
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm-text-primary">
            What out customer are saying
          </p>
          <h1 data-aos="fade-up" className="text3xl font-bold ">
            Testomonials
          </h1>
          <p data-aos="fade-up" className="texy-xs text-gray-400 ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque
            magnam tenetur tempore! Possimus, rerum repudiandae? Molestiae velit
            cupiditate ullam ex.
          </p>
        </div>

        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestomonialsData.map((data) => (
              <div className="my-6">
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-slate-600 bg:primary/10 relative"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col item-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs dark:text-slate-300 text-gray-500">
                        {data.text}
                      </p>
                      <h1 className="text-xl font-bold daek:text-slate-300 text-black/80 dark:text-light">{data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0"></p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
