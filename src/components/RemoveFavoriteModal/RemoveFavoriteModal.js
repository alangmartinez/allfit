import './removeFavoriteModal.css';

export default function RemoveFavoriteModal({ active }) {
  return (
    <>
      <div className={
          active 
          ? "alert alert-danger remove-fav-alert show"
          : "alert alert-danger remove-fav-alert"
      } role="alert">
        <i className="fa-solid fa-trash me-2"></i>
        Removed from favorites !
      </div>
    </>
  );
}
