"use client";

import { z } from "zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { cardSchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from '@/components/ui/input';
import {  Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { X } from "lucide-react";



interface Props {
  setOpen: () => void;
}

const images = [
  "https://res.cloudinary.com/dymlzmyuo/image/upload/v1731397416/master_card_uvqo2k.svg",
  "https://res.cloudinary.com/dymlzmyuo/image/upload/v1731397317/american_f8t6op.svg",
  "https://res.cloudinary.com/dymlzmyuo/image/upload/v1731397356/american_1_bh6myo.svg",
  "https://res.cloudinary.com/dymlzmyuo/image/upload/v1731397385/american_2_j9dmqh.svg",
]


const AddCardModal = ({ setOpen }: Props) => {
const form = useForm<z.infer<typeof cardSchema>>({
  resolver: zodResolver(cardSchema),
  defaultValues: {
    cardCvv: undefined,
    cardNumber: undefined,
    cardValidity: undefined,
  },
});


const onSubmit = async (values: z.infer<typeof cardSchema>) => {
  console.log(values);
  form.reset();
  setOpen();
};



  return (
    <div className="">
    <div className="modal-background" >
      <div className="modal-container">
        <div className="ml-10 mt-10 max-sm:ml-20">
          <X className="cursor-pointer size-5" onClick={setOpen}/>
        </div>
        <div className="px-[150px] py-[40px]">
          <span className="text-headlineThree font-dm-sans font-bold ml-3">Debit Card</span>
          <div className="flex gap-[13px]">
            {images.map((image, index) => (
            <Image
              key={index}
              alt="iamge"
              src={image}
              width={98}
              height={51}
            />
            ))}
          </div>
          <div className="mt-[30px]">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                  control={form.control}
                  name="cardNumber"
                  render={({field}) => (
                    <FormItem>
                      <FormLabel className="text-md font-dm-sans font-normal">Card Number</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} className="w-[470px] h-[46px] max-sm:w-[250px] rounded-[10px] outline-none border-[1px] border-[#878CFF] bg-[#F4F5F6]" placeholder="1234 5678 9012"/>
                      </FormControl>
                      <FormMessage/>
                    </FormItem>
                  )}
                />
                <div className="flex gap-[30px] max-sm:flex-col mt-5">
                  <FormField
                    control={form.control}
                    name="cardValidity"
                    render={({field}) => (
                      <FormItem>
                        <FormLabel className="text-md font-dm-sans font-normal">Expiry Date</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            {...field}
                            placeholder="MM / YY"
                            className="w-[220px] h-[50px] rounded-[10px] bg-[#F4F5F6]"
                          />
                        </FormControl>
                        <FormMessage/>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="cardCvv"
                    render={({field}) => (
                      <FormItem>
                        <FormLabel className="text-md font-dm-sans font-normal">CVC/CVV</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            {...field}
                            placeholder="****"
                            className="w-[220px] h-[50px] rounded-[10px] bg-[#F4F5F6]"
                          />
                        </FormControl>
                        <FormMessage/>
                      </FormItem>
                    )}
                  />
                </div>
                  <div className="mt-[45px]">
                    <button className="bg-blue100 text-white rounded-[30px] px-16 py-2 text-xl font-medium font-dm-sans hover:bg-black" type="submit" >Save</button>
                  </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default AddCardModal