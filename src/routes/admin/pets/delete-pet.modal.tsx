'use client';

import SvgDelete28 from '@/assets/svg/delete-red-28.svg';
import SvgDelete32 from '@/assets/svg/delete-red-32.svg';
import Icon from '@/components/icon';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';

import { useAdminPetsStore } from './admin-pets.store';
import useAdminDeletePetMutation from './queries/admin-delete-pet.mutation';

const DeletePetModal = () => {
  const { mutateAsync, isPending } = useAdminDeletePetMutation();

  const isModalOpen = useAdminPetsStore((s) => s.isDeletePetModalOpen);
  const setIsModalOpen = useAdminPetsStore((s) => s.setIsDeletePetModalOpen);

  async function submitHandler(e: any) {
    e.preventDefault();
    if (isModalOpen) {
      await mutateAsync({ id: isModalOpen });
      setIsModalOpen(undefined);
    }
  }

  return (
    <Dialog
      open={!!isModalOpen}
      onOpenChange={(e) => {
        setIsModalOpen(undefined);
      }}
    >
      <DialogContent
        aria-describedby="delete saved products"
        className="w-[90%] md:max-w-[352px] bg-white p-4 flex flex-col items-center"
      >
        <Icon className="flex items-center justify-center w-[54px] h-[54px] md:w-[65px] md:h-[65px] rounded-xl bg-error-50 text-error-50">
          <SvgDelete28 className="md:hidden" />
          <SvgDelete32 className="md:block hidden" />
        </Icon>
        <p className="font-nunito font-black md:text-lg mt-4">
          Are you deleting the category?
        </p>
        <div className="w-full flex gap-4 mt-6">
          <Button
            variant={'outline-gray'}
            onClick={() => setIsModalOpen(undefined)}
            className="w-full rounded-xl font-normal md:font-normal text-sm md:text-base md:h-11"
          >
            No
          </Button>
          <Button
            onClick={submitHandler}
            variant={isPending ? 'disabled' : 'default'}
            isLoading={isPending}
            disabled={isPending}
            className="w-full rounded-xl text-sm md:text-base md:h-11"
          >
            Yes
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeletePetModal;
