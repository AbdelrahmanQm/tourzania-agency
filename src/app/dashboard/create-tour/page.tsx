"use client";
import { useState } from "react";
import { toast } from "sonner";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  useFormField,
} from "@/components/ui/form";
/* import { Input } from "@/components/ui/input"; */
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
/* import { Textarea } from "@/components/ui/textarea"; */
import {
  MultiSelector,
  MultiSelectorContent,
  MultiSelectorInput,
  MultiSelectorItem,
  MultiSelectorList,
  MultiSelectorTrigger,
} from "@/components/extensions/multi-select";
import { format } from "date-fns";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Calendar as CalendarIcon } from "lucide-react";
import { CloudUpload, Paperclip } from "lucide-react";
import {
  FileInput,
  FileUploader,
  FileUploaderContent,
  FileUploaderItem,
} from "@/components/extensions/file-upload";

import {
  cities,
  locations,
  features,
  includes,
} from "@/components/appData/toursApi";
import { Input, RadioGroup, Radio, Textarea } from "@nextui-org/react";

const formSchema = z.object({
  name_6034721631: z
    .string()
    .min(7, "Name must be 8 - 48 characters")
    .max(48, "Name must be 8 - 48 characters"),
  name_5457212837: z.coerce
    .number()
    .min(1, "Duration can't be less than 1")
    .max(15, "Duration can't be more than 15"),
  name_3225096549: z.string(),
  name_3804163462: z
    .string()
    .min(100, "Description must be at least 100 characters"),
  name_6155064933: z.array(z.string()).nonempty("Please at least one item"),
  name_5658997276: z.array(z.string()).nonempty("Please at least one item"),
  name_1415474687: z.string().min(80),
  name_5200695068: z.array(z.string()).nonempty("Please at least one item"),
  name_0060184356: z.number().min(1),
  name_2936575417: z.number().min(1),
  name_6973134496: z.number().min(1),
  name_1038346682: z.number().min(1),
  name_3415543465: z.number().min(1),
  name_4457539579: z.number().min(1),
  name_7586213094: z.number().min(1),
  name_9860151226: z.number().min(1),
  name_0690080949: z.number().min(1),
  name_5356394045: z.number().min(1),
  name_3761137216: z.number().min(1),
  name_9427653391: z.number().min(1),
  name_7495573242: z.string().min(1).max(20),
  name_3778048346: z.string(),
  name_1598448048: z.number().min(1),
  name_7274870516: z.number().min(1),
  name_2399804365: z.number().min(1),
  name_8828612117: z.array(z.string()).nonempty("Please at least one item"),
  name_7571021078: z.coerce.date(),
  name_9623436822: z.coerce.date(),
  name_8191079351: z.string(),
  name_0283962395: z.string(),
  name_4971604115: z.string(),
});

export default function MyForm() {
  const [files, setFiles] = useState<File[] | null>(null);

  const dropZoneConfig = {
    maxFiles: 5,
    maxSize: 1024 * 1024 * 4,
    multiple: true,
  };
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name_6155064933: [],
      name_5658997276: [],
      name_5200695068: [],
      name_8828612117: [],
      name_7571021078: new Date(),
      name_9623436822: new Date(),
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log(values);
      toast(
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      );
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 max-w-3xl mx-auto py-10"
      >
        <div className="bg-white p-8 rounded-lg shadow-dashboard">
          <p className="text-2xl text-slate-500 font-bold  pb-1 mb-4 border-b border-grayLine">
            Basic Information
          </p>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-6">
              <FormField
                control={form.control}
                name="name_6034721631"
                render={({ field }) => {
                  const { error } = useFormField();
                  return (
                    <Input
                      label="Tour Name"
                      type="text"
                      variant="bordered"
                      errorMessage={error?.message}
                      isInvalid={!!error?.message}
                      color="primary"
                      {...field}
                    />
                  );
                }}
              />
            </div>
            <div className="col-span-3">
              <FormField
                control={form.control}
                name="name_5457212837"
                render={({ field }) => {
                  const { error } = useFormField();
                  return (
                    <Input
                      label="Duration"
                      type="number"
                      errorMessage={error?.message}
                      isInvalid={!!error?.message}
                      color="primary"
                      variant="bordered"
                      {...field}
                    />
                  );
                }}
              />
            </div>

            <div className="col-span-3">
              <FormField
                control={form.control}
                name="name_3225096549"
                render={({ field }) => {
                  const { error } = useFormField();
                  return (
                    <RadioGroup
                      {...field}
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      errorMessage={error?.message}
                      isInvalid={!!error?.message}
                      color="primary"
                    >
                      <Radio value="days">Days</Radio>
                      <Radio value="Hours">Hours</Radio>
                    </RadioGroup>
                  );
                }}
              />
            </div>
          </div>

          <FormField
            control={form.control}
            name="name_3804163462"
            render={({ field }) => {
              const { error } = useFormField();
              return (
                <Textarea
                  label="Description"
                  color="primary"
                  variant="bordered"
                  errorMessage={error?.message}
                  isInvalid={!!error?.message}
                  className="resize-none mt-4"
                  {...field}
                />
              );
            }}
          />
        </div>

        <div className="bg-white p-8 rounded-lg shadow-dashboard">
          <p className="text-2xl text-slate-500 font-bold  pb-1 mb-4 border-b border-grayLine">
            Road Map
          </p>
          <FormField
            control={form.control}
            name="name_6155064933"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cities</FormLabel>
                <FormControl>
                  <MultiSelector
                    values={field.value}
                    onValuesChange={field.onChange}
                    loop
                    className="max-w-xs"
                  >
                    <MultiSelectorTrigger>
                      <MultiSelectorInput placeholder="Select Cities" />
                    </MultiSelectorTrigger>
                    <MultiSelectorContent>
                      <MultiSelectorList>
                        {cities.map((city, index) => {
                          return (
                            <MultiSelectorItem key={index} value={city}>
                              {city}
                            </MultiSelectorItem>
                          );
                        })}
                      </MultiSelectorList>
                    </MultiSelectorContent>
                  </MultiSelector>
                </FormControl>
                <FormDescription>
                  Select cities included in the tour.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="name_5658997276"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Locations</FormLabel>
                <FormControl>
                  <MultiSelector
                    values={field.value}
                    onValuesChange={field.onChange}
                    loop
                    className="max-w-xs"
                  >
                    <MultiSelectorTrigger>
                      <MultiSelectorInput placeholder="Add Locations" />
                    </MultiSelectorTrigger>
                    <MultiSelectorContent>
                      <MultiSelectorList>
                        {locations.map((location, index) => {
                          return (
                            <MultiSelectorItem key={index} value={location}>
                              {location}
                            </MultiSelectorItem>
                          );
                        })}
                      </MultiSelectorList>
                    </MultiSelectorContent>
                  </MultiSelector>
                </FormControl>
                <FormDescription>
                  Select locations to be visited in the tour.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="bg-white p-8 rounded-lg shadow-dashboard">
          <p className="text-2xl text-slate-500 font-bold  pb-1 mb-4 border-b border-grayLine">
            Itinerary and Includes
          </p>
          <FormField
            control={form.control}
            name="name_1415474687"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Day 1 Itinerary</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Itinerary"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Itinerary for each day must be at least 80 characters long.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="name_5200695068"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Includes</FormLabel>
                <FormControl>
                  <MultiSelector
                    values={field.value}
                    onValuesChange={field.onChange}
                    loop
                    className="max-w-xs"
                  >
                    <MultiSelectorTrigger>
                      <MultiSelectorInput placeholder="Select Includes" />
                    </MultiSelectorTrigger>
                    <MultiSelectorContent>
                      <MultiSelectorList>
                        {includes.map((include, index) => {
                          return (
                            <MultiSelectorItem value={include} key={index}>
                              {include}
                            </MultiSelectorItem>
                          );
                        })}
                      </MultiSelectorList>
                    </MultiSelectorContent>
                  </MultiSelector>
                </FormControl>
                <FormDescription>
                  Select tour includes, unselected properties will be displayed
                  as excludes.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="name_8828612117"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Features</FormLabel>
                <FormControl>
                  <MultiSelector
                    values={field.value}
                    onValuesChange={field.onChange}
                    loop
                    className="max-w-xs"
                  >
                    <MultiSelectorTrigger>
                      <MultiSelectorInput placeholder="Add Features" />
                    </MultiSelectorTrigger>
                    <MultiSelectorContent>
                      <MultiSelectorList>
                        {features.map((feature, index) => {
                          return (
                            <MultiSelectorItem value={feature} key={index}>
                              {feature}
                            </MultiSelectorItem>
                          );
                        })}
                      </MultiSelectorList>
                    </MultiSelectorContent>
                  </MultiSelector>
                </FormControl>
                <FormDescription>Select features.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="bg-white p-8 rounded-lg shadow-dashboard">
          <p className="text-2xl text-slate-500 font-bold  pb-1 mb-4">
            Pricing
          </p>
          <div className="border border-grayLine p-4 rounded-lg mb-4">
            <p className="text-solidgreen font-bold">Typical</p>
            <div className="grid grid-cols-12 gap-4 ">
              <div className="col-span-3">
                <FormField
                  control={form.control}
                  name="name_0060184356"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>1/1</FormLabel>
                      <FormControl>
                        <Input placeholder="Price." type="number" {...field} />
                      </FormControl>
                      <FormDescription>
                        Price per person for one traveller.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="col-span-3">
                <FormField
                  control={form.control}
                  name="name_2936575417"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>1/2</FormLabel>
                      <FormControl>
                        <Input placeholder="Price." type="number" {...field} />
                      </FormControl>
                      <FormDescription>
                        Price per person for two travellers.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="col-span-3">
                <FormField
                  control={form.control}
                  name="name_6973134496"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>1/3</FormLabel>
                      <FormControl>
                        <Input placeholder="Price." type="number" {...field} />
                      </FormControl>
                      <FormDescription>
                        Price per person for three travellers.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="col-span-3">
                <FormField
                  control={form.control}
                  name="name_1038346682"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>1/4</FormLabel>
                      <FormControl>
                        <Input placeholder="Price." type="number" {...field} />
                      </FormControl>
                      <FormDescription>
                        Price per person for four travellers.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>

          <div className="border border-grayLine p-4 rounded-lg mb-4">
            <p className="text-orange font-bold">Occasional</p>
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-3">
                <FormField
                  control={form.control}
                  name="name_3415543465"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>1/1</FormLabel>
                      <FormControl>
                        <Input placeholder="Price." type="number" {...field} />
                      </FormControl>
                      <FormDescription>
                        Price per person for one traveller.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="col-span-3">
                <FormField
                  control={form.control}
                  name="name_4457539579"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>1/2</FormLabel>
                      <FormControl>
                        <Input placeholder="Price." type="number" {...field} />
                      </FormControl>
                      <FormDescription>
                        Price per person for two travellers.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="col-span-3">
                <FormField
                  control={form.control}
                  name="name_7586213094"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>1/3</FormLabel>
                      <FormControl>
                        <Input placeholder="Price." type="number" {...field} />
                      </FormControl>
                      <FormDescription>
                        Price per person for three travellers.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="col-span-3">
                <FormField
                  control={form.control}
                  name="name_9860151226"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>1/4</FormLabel>
                      <FormControl>
                        <Input placeholder="Price." type="number" {...field} />
                      </FormControl>
                      <FormDescription>
                        Price per person for four travellers.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>
          <div className="border border-grayLine p-4 rounded-lg ">
            <p className="text-rose-700 font-bold">Exceptional</p>
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-3">
                <FormField
                  control={form.control}
                  name="name_0690080949"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>1/1</FormLabel>
                      <FormControl>
                        <Input placeholder="Price." type="number" {...field} />
                      </FormControl>
                      <FormDescription>
                        Price per person for one traveller.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="col-span-3">
                <FormField
                  control={form.control}
                  name="name_5356394045"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>1/2</FormLabel>
                      <FormControl>
                        <Input placeholder="Price." type="number" {...field} />
                      </FormControl>
                      <FormDescription>
                        Price per person for two travellers.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="col-span-3">
                <FormField
                  control={form.control}
                  name="name_3761137216"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>1/3</FormLabel>
                      <FormControl>
                        <Input placeholder="Price." type="number" {...field} />
                      </FormControl>
                      <FormDescription>
                        Price per person for three travellers.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="col-span-3">
                <FormField
                  control={form.control}
                  name="name_9427653391"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>1/4</FormLabel>
                      <FormControl>
                        <Input placeholder="Price." type="number" {...field} />
                      </FormControl>
                      <FormDescription>
                        Price per person for four travellers.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-dashboard">
          <p className="text-2xl text-slate-500 font-bold  pb-1 mb-4">
            Add Ons
          </p>
          <div className="border border-grayLine p-4 rounded-lg mb-4">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-6">
                <FormField
                  control={form.control}
                  name="name_7495573242"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Add on name.</FormLabel>
                      <FormControl>
                        <Input placeholder="Add on." type="text" {...field} />
                      </FormControl>
                      <FormDescription>
                        Add on name must be less than 20 characters.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="col-span-6">
                <FormField
                  control={form.control}
                  name="name_3778048346"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Add on type</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Add on type." />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="per tour">Per tour</SelectItem>
                          <SelectItem value="per person">Per person</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormDescription>
                        Per person: additional fees will be applied per person,
                        Per tour: additional fees will be applied per tour.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-4">
                <FormField
                  control={form.control}
                  name="name_1598448048"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-solidgreen">
                        Typical Price.
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Price." type="number" {...field} />
                      </FormControl>
                      <FormDescription>Typical pricing.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="col-span-4">
                <FormField
                  control={form.control}
                  name="name_7274870516"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-orange">
                        Occasional Price.
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Price." type="number" {...field} />
                      </FormControl>
                      <FormDescription>Occasional pricing.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="col-span-4">
                <FormField
                  control={form.control}
                  name="name_2399804365"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-rose-700">
                        Exceptional Price.
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Price." type="number" {...field} />
                      </FormControl>
                      <FormDescription>Exceptional pricing.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-dashboard">
          <p className="text-2xl text-slate-500 font-bold  pb-1 mb-4">
            Availabilities
          </p>
          <div className="border border-grayLine p-4 rounded-lg mb-4">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-4">
                <FormField
                  control={form.control}
                  name="name_7571021078"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Start Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                " pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormDescription>
                        Pick the starting date for the availability.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="col-span-4">
                <FormField
                  control={form.control}
                  name="name_9623436822"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>End Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                " pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormDescription>
                        Pick the ending date for the availability.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="col-span-4 ">
                <FormField
                  control={form.control}
                  name="name_8191079351"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Pricing</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select Pricing" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="typical">Typical</SelectItem>
                          <SelectItem value="occasional">Occasional</SelectItem>
                          <SelectItem value="exceptional">
                            Exceptional
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormDescription>
                        You can manage email addresses in your email settings.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-dashboard">
          <p className="text-2xl text-slate-500 font-bold  pb-1 mb-4">Images</p>
          <FormField
            control={form.control}
            name="name_0283962395"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cover Image</FormLabel>
                <FormControl>
                  <FileUploader
                    value={files}
                    onValueChange={setFiles}
                    dropzoneOptions={dropZoneConfig}
                    className="relative bg-background rounded-lg p-2"
                  >
                    <FileInput
                      id="fileInput"
                      className="outline-dashed outline-1 outline-slate-500"
                    >
                      <div className="flex items-center justify-center flex-col p-8 w-full ">
                        <CloudUpload className="text-gray-500 w-10 h-10" />
                        <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
                          <span className="font-semibold">Click to upload</span>
                          &nbsp; or drag and drop
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          SVG, PNG, JPG or GIF
                        </p>
                      </div>
                    </FileInput>
                    <FileUploaderContent>
                      {files &&
                        files.length > 0 &&
                        files.map((file, i) => (
                          <FileUploaderItem key={i} index={i}>
                            <Paperclip className="h-4 w-4 stroke-current" />
                            <span>{file.name}</span>
                          </FileUploaderItem>
                        ))}
                    </FileUploaderContent>
                  </FileUploader>
                </FormControl>
                <FormDescription>Select cover image</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="name_4971604115"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tour Images</FormLabel>
                <FormControl>
                  <FileUploader
                    value={files}
                    onValueChange={setFiles}
                    dropzoneOptions={dropZoneConfig}
                    className="relative bg-background rounded-lg p-2"
                  >
                    <FileInput
                      id="fileInput"
                      className="outline-dashed outline-1 outline-slate-500"
                    >
                      <div className="flex items-center justify-center flex-col p-8 w-full ">
                        <CloudUpload className="text-gray-500 w-10 h-10" />
                        <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
                          <span className="font-semibold">Click to upload</span>
                          &nbsp; or drag and drop
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          SVG, PNG, JPG or GIF
                        </p>
                      </div>
                    </FileInput>
                    <FileUploaderContent>
                      {files &&
                        files.length > 0 &&
                        files.map((file, i) => (
                          <FileUploaderItem key={i} index={i}>
                            <Paperclip className="h-4 w-4 stroke-current" />
                            <span>{file.name}</span>
                          </FileUploaderItem>
                        ))}
                    </FileUploaderContent>
                  </FileUploader>
                </FormControl>
                <FormDescription>Selec tour images.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit">Create Tour</Button>
      </form>
    </Form>
  );
}
