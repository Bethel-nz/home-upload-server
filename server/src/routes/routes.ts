import { Hono } from 'hono';
import * as fs from 'fs';
import * as path from 'path';

export const route = new Hono();
route.get('/', (ctx) => ctx.text('Hello Node.js!'));

route.post('/upload-file', async (ctx) => {
  const body = await ctx.req.formData();
  const file = body.get('file') as File;
  const filename = body.get('filename') as string;
  // const file_path = `${__dirname}/../../../../uploads/${filename}`;
  const file_path = path.join(
    __dirname,

    '..',
    '..',
    '..',
    '..',
    'uploads',
    filename
  );
  // const filePath = path.join('/uploads', filename);

  const buffer = await file.arrayBuffer();
  try {
    fs.writeFileSync(file_path, Buffer.from(buffer));
    console.log({ uploadedfile: file_path });
    return ctx.json({
      status: 200,
      message: 'Upload complete',
    });
  } catch (error) {
    console.log('Error occurred:', error);
    return ctx.json({ message: 'An error occurred' });
  }
});
