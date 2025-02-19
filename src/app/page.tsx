"use client";

import { PhotoItem } from "@/components/PhotoItem";
import { PhotoList } from "./data/photoList";
import { useState } from "react";
import { Modal } from "@/components/Modal";

const Page = () => {
  const [showModal, setShowModal] = useState(false);
  const [imageOfModal, setImageOfModal] = useState('');

  const openModal = (id: number) => {
    const photo = PhotoList.find(item => item.id === id);
    if (photo) {
      setImageOfModal(photo.url);
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="fotos">
      <h1 className="text-center text-3xl font-bold my-10">Fotos Galáticas</h1>
      <section className="container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {PhotoList.map((item) => (
          <PhotoItem key={item.id} photo={item} onClick={() => openModal(item.id)} />
        ))}
      </section>

      {showModal && (
        <Modal image={imageOfModal} closeModal={closeModal} />
      )}
    </div>
  );
};

export default Page;
