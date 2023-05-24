import formidable from "formidable";
import path from "path";
import fs from "fs/promises";
export const config = {
  api: {
    bodyParser: false,
  },
};
const readFile = (req) => {
  const options = {
    uploadDir: path.join(process.cwd(), `/public/images`),
    filename: (name, ext, path, form) => {
      return `${Date.now().toString()}_${path.originalFilename}`;
    },
  };
  const form = formidable(options);
  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      resolve({ fields, files });
    });
  });
};
const handler = async (req, res) => {
  try {
    await fs.readdir(path.join(process.cwd() + "/public", "/images"));
  } catch (error) {
    await fs.mkdir(path.join(process.cwd() + "/public", "/images"));
  }
  const { files } = await readFile(req);
  if (!files.postedImage) {
    res.json({ success: false, fileName: "" });
  } else {
    res.json({ success: true, fileName: files.postedImage.newFilename });
  }
};
export default handler;
