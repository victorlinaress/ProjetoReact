import { Photo } from "@/types/Photo";

type Props = {
  photo: Photo;
  onClick: () => void; // Corrigido o nome de OnClick para onClick para manter o padrão de camelCase
};

export const PhotoItem = ({ photo, onClick }: Props) => {
  return (
    <div onClick={onClick} className="cursor-pointer hover:opacity-80">
      <img src={`assets/${photo.url}`} className="w-full h-60 object-cover rounded-lg"/>
    </div>
  );
};
