import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'customer',
  title: 'Customer',
  type: 'document',
  fields: [
    defineField({
      name: 'firstName',
      title: 'First Name',
      type: 'string',
    }),
    defineField({
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug (for internal use. just click generate)',
      type: 'slug',
      options: {
        source: doc => `${doc.firstName}-${doc.lastName}`,
        maxLength: 96,
      },
    }),
    defineField({
      name: 'product',
      title: 'Product',
      type: 'object',
      fields: [
        defineField({
          name: 'name',
          title: 'Name',
          type: 'string',
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
        }),
        defineField({
          name: 'price',
          title: 'Price',
          type: 'number',
          validation: Rule => Rule.required().positive(),
        }),
        defineField({
          name: 'image',
          title: 'Image',
          type: 'image',
          options: { hotspot: true },
        }),
      ],
    }),
  ],
  fieldsets: [
    {
      name: 'hidden',
      title: 'Hidden fields',
      options: {
        collapsible: true,
        collapsed: true,
        description: 'Fields that are hidden from plain sight',
      },
    },
  ],
})
