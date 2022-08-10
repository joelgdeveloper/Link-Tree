import { useState, useRef, useEffect } from "react";

const LinkTree = ({ docId, title, url, onDelete, onUpdate }) => {
  const [currentTitle, setCurrentTitle] = useState(title);
  const [currentUrl, setCurrentUrl] = useState(url);
  const [editTitle, setEditTitle] = useState(false);
  const [editUrl, setEditUrl] = useState(false);

  const titleRef = useRef(null);
  const urlRef = useRef(null);

  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.focus();
    }
    if (urlRef.current) {
      urlRef.current.focus();
    }
  }, [editTitle, editUrl]);
  // useEffect(() => {
  //   if (titleRef.current) {
  //     titleRef.current.focus();
  //   }
  // }, [editTitle]);

  // useEffect(() => {
  //   if (urlRef.current) {
  //     urlRef.current.focus();
  //   }
  // }, [editUrl]);

  const handleEditTitle = () => {
    setEditTitle(true);
  };

  const handleEditUrl = () => {
    setEditUrl(true);
  };

  const handleChangeTitle = (e) => {
    setCurrentTitle(e.target.value);
  };
  const handleChangeUrl = (e) => {
    setCurrentUrl(e.target.value);
  };

  const handleBlurTitle = (e) => {
    setEditTitle(false);
    onUpdate(docId, currentTitle, currentUrl)
  }
  const handleBlurUrl = (e) => {
    setEditUrl(false);
    onUpdate(docId, currentTitle, currentUrl)
  }

  return (
    <div key={docId}>
      <div>
        <div>
          {editTitle ? (
            <>
              <input
                ref={titleRef}
                type="text"
                value={currentTitle}
                onChange={handleChangeTitle}
                onBlur={handleBlurTitle}
              />
            </>
          ) : (
            <>
              <button onClick={handleEditTitle}>edit</button>
              {currentTitle}
            </>
          )}
        </div>
        <div>
          {editUrl ? (
            <>
              <input
                ref={urlRef}
                type="text"
                value={currentUrl}
                onChange={handleChangeUrl}
                onBlur={handleBlurUrl}
              />
            </>
          ) : (
            <>
              <button onClick={handleEditUrl}>edit</button>
              {currentUrl}
            </>
          )}
        </div>
      </div>
      <div>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default LinkTree;
