import { star } from "../assets/icons";

type Products = {
  name: string;
  image: string;
  price: string;
};

const ProductDetail: React.FC<Products> = ({ image, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={image} alt="shoe-image" className="h-[280] w-[280]" />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} className="" />
        <p className="text-xl leading-normal font-montserrat text-slate-gray">
          (4.5)
        </p>
      </div>

      <h3 className="mt-2 leading-normal text-2xl font-semibold font-palanquin">
        {name}
      </h3>
      <p className="mt-2 font-semibold text-coral-red text-2xl leading-normal font-montserrat">
        {price}
      </p>
    </div>
  );
};

export default ProductDetail;
