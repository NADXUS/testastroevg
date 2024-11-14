import React from "react";

function Map() {
  return (
    <div className="flex justify-center self-start max-w-6xl gap-4 my-8 mx-auto">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7936.254862745743!2d-75.583893!3d5.977185!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e468f665b716fa3%3A0x8dd5c935932518c4!2sAvovite!5e0!3m2!1ses-419!2sco!4v1727981477814!5m2!1ses-419!2sco"
        className="border-none rounded-[24px] w-full h-[500px]"
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default Map;
