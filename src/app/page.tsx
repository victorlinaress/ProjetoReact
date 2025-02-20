"use client";

import { PhotoItem } from "@/components/PhotoItem";
import { PhotoList } from "./data/photoList";
import { useState } from "react";
import { Modal } from "@/components/Modal";

const Page = () => {
  const [showModal, setShowModal] = useState(false); // State para mostrar e atualizar o modal
  const [imageOfModal, setImageOfModal] = useState(""); // State para guardar o caminho da imagem e mudar no modal

  const openModal = (id: number) => {
    const photo = PhotoList.find((item) => item.id === id);
    if (photo) {
      setImageOfModal(photo.url);
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="fotos bg-black">
      <h1 className="text-center text-3xl font-bold my-10">Fotos Galáticas</h1>
      <section className="container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
      {PhotoList.map((item) => (
          <PhotoItem
            key={item.id}
            photo={item}
            onClick={() => openModal(item.id)}
          />
        ))}
      </section>

      {showModal && <Modal image={imageOfModal} closeModal={closeModal} />}
    </div>
  );
};

export default Page;
