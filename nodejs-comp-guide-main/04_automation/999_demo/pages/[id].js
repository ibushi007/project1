import { useRouter } from "next/router";
import Header from "../components/Header";
const rawCards = require('../datas/card.json');

const cardPath = rawCards.map((card) => {
  return {
    params: {
      id: String(card.id),
    },
  };
});

const Card = ({ company, division, title, name, id }) => {
  
  const router = useRouter();
  const back = () => router.back();

  return (
    <>
      <Header />
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: "30rem" }}
      >
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title company">{company}</h5>
            <h6 className="card-subtitle mb-2 text-muted division">
              {division} {title}
            </h6>
            <h3 className="card-text name">{id} {name}</h3>
          </div>
        </div>
      </div>
      <div className="container position-relative">
        <button
          type="button"
          className="position-absolute top-0 end-0 btn btn-secondary"
          onClick={back}
        >
          戻る
        </button>
      </div>
    </>
  );
};

export async function getStaticPaths() {
  return {
    paths: cardPath,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const card = rawCards.find((data) => {
    return data.id == params.id;
  });

  return {
    props: {
      id: card.id,
      name: card.name,
      company: card.company,
      division: card.division,
      title: card.title,
    },
  };
}

export default Card;