// 共通の設定
import { validationResult } from "express-validator";

// Mongoose Versionでの設定
import { Book } from "../models/book.mjs";

/* ============================================
Mongoose Version
============================================ */
export const getAllBooks = async function (req, res) {
  const books = await Book.find().sort({ updatedAt: -1 });
  res.json(books);
};

export const getBookById = async function (req, res) {
  const book = await Book.findById(req.params.id);

  if (book === null) return res.status(404).send("Book Not Found");

  res.json(book);
};
export const registerBook = async function (req, res) {

  const errors = validationResult(req);
  
  if (!errors.isEmpty()) {
    const err = errors.array();
    return res.status(400).json(errors.array()[0]);
  };

  const book = new Book(req.body);
  
  await book.save();
  
  res.status(201).json(book);
  
};

export const updateBook = async function (req, res) {

  const errors = validationResult(req);

  if (!errors.isEmpty()) return res.status(400).json(errors.array());

  const _id = req.params.id;
  const newBook = await Book.findByIdAndUpdate(_id, req.body, { new: true });

  if (newBook === null) return res.status(404).send("Book Not Found");

  res.json(newBook);
};

export const deleteBook = async function (req, res) {
  const _id = req.params.id;
  const result = await Book.findByIdAndDelete(_id);

  if (result === null) return res.status(404).send("Book Not Found");

  res.json({ msg: "Delete succeeded." });
};

/* ============================================
With MongoDB Version (without mongoose)
============================================ */
/*
import { client, getCollection } from "../helpers/db.mjs";

const colName = "books";

export const getAllBooks = async function (req, res) {
  try {
    const col = await getCollection(colName);
    const result = await col.find({}).toArray();
    res.json(result);
  } catch (err) {
    // console.log(err.stack);
    res.status(500).json(err.stack);
  } finally {
    await client.close();
  }
};

export const getBookById = async function (req, res) {
  try {
    const col = await getCollection(colName);
    const result = await col.find({ id: req.params.id }).toArray();
    console.log(result);
    if (result.length) {
      res.json(result);
    } else {
      res.status(404).send("Book Not Found");
    }
  } catch (err) {
    // console.log(err.stack);
    res.status(500).json(err.stack);
  } finally {
    await client.close();
  }
};

export const registerBook = async function (req, res) {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    try {
      const col = await getCollection(colName);

      const result = await col.insertOne(req.body);
      console.log(result);
      res.status(201).json(req.body);
    } catch (err) {
      // console.log(err.stack);
      res.status(500).json(err.stack);
    } finally {
      await client.close();
    }
  } else {
    res.status(400).json(errors.array());
  }
};

export const updateBook = async function (req, res) {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    try {
      const col = await getCollection(colName);

      const filter = { id: req.params.id };
      const result = await col.updateMany(filter, { $set: req.body });
      console.log(result);
      if (result.matchedCount) {
        res.status(200).json(await col.find(filter).toArray());
      } else {
        res.status(404).send("Book Not Found");
      }
    } catch (err) {
      res.status(500).json(err.stack);
    } finally {
      await client.close();
    }
  } else {
    res.status(400).json(errors.array());
  }
};

export const deleteBook = async function (req, res) {
  try {
    const col = await getCollection(colName);
    const result = await col.deleteMany({ id: req.params.id });
    console.log(result);
    if (result.deletedCount) {
      res.json({ msg: "Delete succeeded." });
    } else {
      res.status(404).send("Book Not Found");
    }
  } catch (err) {
    res.status(500).json(err.stack);
  } finally {
    await client.close();
  }
};
*/

/* ============================================
Mock Version
 ============================================ */
/*
let mockBooks = [
  {
    id: "1",
    title: "独習JavaScript新版",
    description: "JavaScriptについての本",
    rating: 5,
    comment: "わかりやすい",
  },
  {
    id: "2",
    title: "独習C",
    description: "JavaScriptの入",
    rating: 4,
    comment: "わかりやすい",
  },
  {
    id: "3",
    title: "JavaScriptの教科書",
    description: "JavaScriptの入門書",
    rating: 4,
    comment: "わかりやすい",
  },
];

export const getAllBooks = function (req, res) {
  res.json(mockBooks);
};

export const getBookById = function (req, res) {
  let book;
  for (const mockBook of mockBooks) {
    if (mockBook.id === req.params.id) book = mockBook;
  }
  if (book) {
    res.json(book);
  } else {
    res.status(404).send("Book Not Found");
  }
};

export const registerBook = function (req, res) {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    mockBooks.push(req.body);
    res.status(201).json(req.body);
  } else {
    res.status(400).json(errors.array());
  }
};

export const updateBook = function (req, res) {
  const errors = validationResult(req);
  if (errors.array().length) {
    res.status(400).json(errors.array());
  } else {
    let book;
    for (let i = 0; i < mockBooks.length; i++) {
      if (mockBooks[i].id === req.params.id) {
        book = { ...mockBooks[i], ...req.body };
        mockBooks[i] = book;
        res.json(mockBooks[i]);
        break;
      }
    }
    if (!book) {
      res.status(404).send("Book Not Found");
    }
  }
};

export const deleteBook = function (req, res) {
  mockBooks = mockBooks.filter(function (mockBook) {
    return req.params.id !== mockBook.id;
  });
  console.log(mockBooks);
  res.json({ msg: "Delete succeeded." });
};
 */
