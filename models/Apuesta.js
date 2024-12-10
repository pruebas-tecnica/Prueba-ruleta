import mongoose, { Schema } from "mongoose";

const apuestaSchema = new Schema({
  cantidad: {
    type: String,
    required: true,
  },
  numero: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },

  usuario: {
    type: String,
    required: true,
  },
  ruleta: {
    type: Schema.Types.ObjectId,
    ref: "Ruleta",
  },
});

const Apuesta = mongoose.model("Apuesta", apuestaSchema);

export default Apuesta;

