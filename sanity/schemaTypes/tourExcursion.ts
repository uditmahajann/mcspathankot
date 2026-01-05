import { defineType, defineField } from "sanity"

export default defineType({
  name: "tourExcursion",
  title: "Tours & Excursions",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required().max(200),
    }),

    defineField({
      name: "images",
      title: "Gallery Images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
      validation: (Rule) => Rule.required().min(1),
    }),

    defineField({
      name: "bgColor",
      title: "Background Color",
      type: "string",
      options: {
        list: [
          { title: "Sky Blue", value: "bg-sky-100" },
          { title: "Purple", value: "bg-purple-100" },
          { title: "Yellow", value: "bg-yellow-100" },
          { title: "Green", value: "bg-green-100" },
        ],
        layout: "radio",
      },
      initialValue: "bg-sky-100",
    }),

    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
    }),
  ],

  orderings: [
    {
      title: "Order Ascending",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
})
