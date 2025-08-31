'use client';

import { Pet } from '..';
import PetCard from './cards/pet-card.component';

type Props = {
  pets: Pet[];
  lang: string;
};

const HomePets = (props: Props) => {
  return (
    <main className="mt-16 px-5 md:px-20 md:mt-24">
      <p className="font-nunito font-black text-xl md:text-4xl text-center">
        {props.lang == 'fa' ? 'خرید بر اساس حیوانات' : 'Shop by Animal'}
      </p>
      <section className="mt-8 grid grid-cols-2 md:grid-cols-4 md:pt-14 justify-items-center gap-y-8 md:gap-y-24">
        {props.pets.map((c, index) => (
          <PetCard
            lang={props.lang}
            key={c.id}
            pet={c}
            index={index}
            totalLength={props.pets.length}
          />
        ))}
      </section>
    </main>
  );
};

export default HomePets;
