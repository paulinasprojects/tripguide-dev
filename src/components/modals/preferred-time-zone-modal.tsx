interface Props {
  setOpen: () => void;
}

const PreferredTimeZoneModal = ({setOpen}: Props) => {
  return (
    <div onClick={setOpen}>
      <div className="modal-background">
        <div className="modal-container | p-10">
          <span>test</span>
        </div>
      </div>
    </div>
  )
}

export default PreferredTimeZoneModal