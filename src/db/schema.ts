import { pgTable, serial, text, varchar, timestamp, integer, decimal, uniqueIndex } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  fullName: text('full_name'),
  phone: varchar('phone', { length: 20 }),
  email: text('email').notNull().unique(),
  password: text('password').notNull(),
  role: text('role').default('buyer'), // buyer or admin
  createdAt: timestamp('created_at').defaultNow(),
});

export const products = pgTable('products', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  description: text('description'),
  price: decimal('price', { precision: 10, scale: 2 }).notNull(),
  category: text('category'),
  stock: integer('stock').default(0),
  imageUrl: text('image_url'),
  createdAt: timestamp('created_at').defaultNow(),
});

export const orders = pgTable('orders', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').references(() => users.id),
  total: decimal('total', { precision: 10, scale: 2 }).notNull(),
  status: text('status').default('pending'), // pending, processing, shipped, delivered, cancelled
  paymentMethod: text('payment_method'),
  shippingAddress: text('shipping_address'),
  createdAt: timestamp('created_at').defaultNow(),
});

export const orderItems = pgTable('order_items', {
  id: serial('id').primaryKey(),
  orderId: integer('order_id').references(() => orders.id),
  productId: integer('product_id').references(() => products.id),
  quantity: integer('quantity').notNull(),
  price: decimal('price', { precision: 10, scale: 2 }).notNull(),
});

export const favorites = pgTable('favorites', {
    id: serial('id').primaryKey(),
    userId: integer('user_id').references(() => users.id),
    productId: integer('product_id').references(() => products.id),
});
