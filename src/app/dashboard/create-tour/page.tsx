"use client";
import { useState } from "react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
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
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  MultiSelector,
  MultiSelectorContent,
  MultiSelectorInput,
  MultiSelectorItem,
  MultiSelectorList,
  MultiSelectorTrigger,
} from "@/components/extensions/multi-select";
import { SmartDatetimeInput } from "@/components/extensions/smart-date-time-input";
import { enUS } from "date-fns/locale";
import { CloudUpload, Paperclip } from "lucide-react";
import {
  FileInput,
  FileUploader,
  FileUploaderContent,
  FileUploaderItem,
} from "@/components/extensions/file-upload";
import { DatePickerWithRange } from "@/components/DatePicker";

const formSchema = z.object({
  name_6034721631: z.string().min(7).max(20),
  name_5457212837: z.number().min(1).max(15),
  name_3225096549: z.string(),
  name_3804163462: z.string().min(100),
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
  /* name_9411891919: z.coerce.date(), */
  name_9411891919: z.object({ from: z.coerce.date(), to: z.coerce.date() }),
  name_7451148393: z.coerce.date(),
  name_0383589032: z.string(),
  name_7495573242: z.string().min(1).max(20),
  name_3778048346: z.string(),
  name_1598448048: z.number().min(1),
  name_7274870516: z.number().min(1),
  name_2399804365: z.number().min(1),
  name_8828612117: z.array(z.string()).nonempty("Please at least one item"),
  name_0283962395: z.string(),
  name_4971604115: z.string(),
});

export default function Page() {
  const [files, setFiles] = useState<File[] | null>(null);

  const dropZoneConfig = {
    maxFiles: 5,
    maxSize: 1024 * 1024 * 4,
    multiple: true,
  };
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name_6155064933: ["React"],
      name_5658997276: ["React"],
      name_5200695068: ["React"],
      name_8828612117: ["React"],
      name_9411891919: new Date(),
      name_7451148393: new Date(),
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
        <FormField
          control={form.control}
          name="name_6034721631"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tour Name</FormLabel>
              <FormControl>
                <Input placeholder="Tour Name" type="text" {...field} />
              </FormControl>
              <FormDescription>
                Tour name must be 8 - 20 characters long.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-6">
            <FormField
              control={form.control}
              name="name_5457212837"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Duration</FormLabel>
                  <FormControl>
                    <Input placeholder="Duration" type="number" {...field} />
                  </FormControl>
                  <FormDescription>
                    Duration must be a number between 1 and 15
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="col-span-6">
            <FormField
              control={form.control}
              name="name_3225096549"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Unit</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Unit" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="m@example.com">
                        m@example.com
                      </SelectItem>
                      <SelectItem value="m@google.com">m@google.com</SelectItem>
                      <SelectItem value="m@support.com">
                        m@support.com
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    Duration unit must be days or hours
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <FormField
          control={form.control}
          name="name_3804163462"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Description"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Tour Description must be at least 100 characters.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

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
                    <MultiSelectorInput placeholder="Select languages" />
                  </MultiSelectorTrigger>
                  <MultiSelectorContent>
                    <MultiSelectorList>
                      <MultiSelectorItem value={"React"}>
                        React
                      </MultiSelectorItem>
                      <MultiSelectorItem value={"Vue"}>Vue</MultiSelectorItem>
                      <MultiSelectorItem value={"Svelte"}>
                        Svelte
                      </MultiSelectorItem>
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
                    <MultiSelectorInput placeholder="Select languages" />
                  </MultiSelectorTrigger>
                  <MultiSelectorContent>
                    <MultiSelectorList>
                      <MultiSelectorItem value={"React"}>
                        React
                      </MultiSelectorItem>
                      <MultiSelectorItem value={"Vue"}>Vue</MultiSelectorItem>
                      <MultiSelectorItem value={"Svelte"}>
                        Svelte
                      </MultiSelectorItem>
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
                    <MultiSelectorInput placeholder="Select languages" />
                  </MultiSelectorTrigger>
                  <MultiSelectorContent>
                    <MultiSelectorList>
                      <MultiSelectorItem value={"React"}>
                        React
                      </MultiSelectorItem>
                      <MultiSelectorItem value={"Vue"}>Vue</MultiSelectorItem>
                      <MultiSelectorItem value={"Svelte"}>
                        Svelte
                      </MultiSelectorItem>
                    </MultiSelectorList>
                  </MultiSelectorContent>
                </MultiSelector>
              </FormControl>
              <FormDescription>
                Select tour includes, unselected properties will be displayed as
                excludes.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-6">
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

          <div className="col-span-6">
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
        </div>

        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-6">
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

          <div className="col-span-6">
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

        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-6">
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

          <div className="col-span-6">
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
        </div>

        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-6">
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

          <div className="col-span-6">
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

        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-6">
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

          <div className="col-span-6">
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
        </div>

        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-6">
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

          <div className="col-span-6">
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

        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-4">
            <FormField
              control={form.control}
              name="name_9411891919"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Start Date</FormLabel>
                  <FormControl>
                    <SmartDatetimeInput
                      value={field.value}
                      onValueChange={field.onChange}
                      placeholder="e.g. Tomorrow morning 9am"
                      locale={enUS}
                    />
                  </FormControl>
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
              name="name_7451148393"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>End Date</FormLabel>
                  <FormControl>
                    <SmartDatetimeInput
                      value={field.value}
                      onValueChange={field.onChange}
                      placeholder="e.g. Tomorrow morning 9am"
                      locale={enUS}
                    />
                  </FormControl>
                  <FormDescription>
                    Pick the ending date for the availability.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="col-span-4">
            <FormField
              control={form.control}
              name="name_0383589032"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pricing.</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Pricing" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="m@example.com">
                        m@example.com
                      </SelectItem>
                      <SelectItem value="m@google.com">m@google.com</SelectItem>
                      <SelectItem value="m@support.com">
                        m@support.com
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    Typical, Occasional or Exceprional
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

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
                      <SelectItem value="m@example.com">
                        m@example.com
                      </SelectItem>
                      <SelectItem value="m@google.com">m@google.com</SelectItem>
                      <SelectItem value="m@support.com">
                        m@support.com
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    Per person: additional fees will be applied per person, Per
                    tour: additional fees will be applied per tour.
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
                  <FormLabel>Typical Price.</FormLabel>
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
                  <FormLabel>Occasional Price.</FormLabel>
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
                  <FormLabel>Exceptional Price.</FormLabel>
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
                    <MultiSelectorInput placeholder="Select languages" />
                  </MultiSelectorTrigger>
                  <MultiSelectorContent>
                    <MultiSelectorList>
                      <MultiSelectorItem value={"React"}>
                        React
                      </MultiSelectorItem>
                      <MultiSelectorItem value={"Vue"}>Vue</MultiSelectorItem>
                      <MultiSelectorItem value={"Svelte"}>
                        Svelte
                      </MultiSelectorItem>
                    </MultiSelectorList>
                  </MultiSelectorContent>
                </MultiSelector>
              </FormControl>
              <FormDescription>Select features.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

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
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
