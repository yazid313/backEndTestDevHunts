import { aboutControl, interestControl, userControl } from "../models/index.js";
import fs from "fs";

const getAboutAll = async (req, res) => {
  try {
    const respon = await aboutControl.findAll();
    res.status(200).json(respon);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getAboutAllById = async (req, res) => {
  try {
    const respon = await aboutControl.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!respon) {
      return res.status(401).json({ massage: "id Tidak Terdaftar!" });
    } else {
      res.status(200).json(respon);
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getAboutAndUsersById = async (req, res) => {
  try {
    const respon = await userControl.findOne({
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: aboutControl,
        },
      ],
    });

    if (!respon) {
      return res.status(401).json({ massage: "id Tidak Terdaftar!" });
    } else {
      res.status(200).json(respon);
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const createAbout = async (req, res) => {
  const aboutData = {
    user_id: req.body.user_id,
    display_name: req.body.display_name,
    gender: req.body.gender,
    brithday: req.body.brithday,
    horoscope: req.body.horoscope,
    zodiac: req.body.zodiac,
    height: req.body.height,
    weight: req.body.weight,
    photo: req.file ? req.file.filename : req.body.photo,
  };

  try {
    const newAbout = await aboutControl.create(aboutData);
    res.status(201).json(newAbout);
  } catch (err) {
    if (req.file) {
      const result = req.file.filename;
      if (fs.existsSync(`images/${result}`)) {
        fs.unlinkSync(`images/${result}`);
      }
    }

    res.status(400).json({ message: err.message });
  }
};

const updateAbout = async (req, res) => {
  const aboutData = {
    user_id: req.body.user_id,
    display_name: req.body.display_name,
    gender: req.body.gender,
    brithday: req.body.brithday,
    horoscope: req.body.horoscope,
    zodiac: req.body.zodiac,
    height: req.body.height,
    weight: req.body.weight,
    photo: req.file ? req.file.filename : req.body.photo,
  };

  try {
    const newAbout = await aboutControl.update(aboutData, {
      where: {
        id: req.params.id,
      },
    });
    res.status(201).json(newAbout);
  } catch (err) {
    if (req.file) {
      const result = req.file.filename;
      if (fs.existsSync(`images/${result}`)) {
        fs.unlinkSync(`images/${result}`);
      }
    }

    res.status(400).json({ message: err.message });
  }
};

const deleteAboutById = async (req, res) => {
  try {
    const respon = await aboutControl.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(respon);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export {
  getAboutAll,
  getAboutAllById,
  getAboutAndUsersById,
  createAbout,
  updateAbout,
  deleteAboutById,
};
