import './addFavoriteModal.css';

export default function AddFavoriteModal({ active }) {
  return (
    <>
      <div
        className={
          active
            ? "alert alert-warning favorite-modal show"
            : "alert alert-warning favorite-modal"
        }
        role="alert"
      >
        <i className="fa-solid fa-heart me-2"></i>Added to favorites !
      </div>
    </>
  );
}
