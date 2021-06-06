import { CircularProgress } from "material-ui"
import React, { useCallback, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getAllGists } from "../store/gists"
import {
  selectGists,
  selectGistsError,
  selectGistsLoading,
} from "../store/selectors"

export const GistsList = () => {
  const dispatch = useDispatch()
  const gists = useSelector(selectGists)
  const error = useSelector(selectGistsError)
  const loading = useSelector(selectGistsLoading)

  const requestGists = () => {
    dispatch(getAllGists())
  }

  useEffect(() => {
    requestGists()
  }, [])

  const renderGist = useCallback(
    (gist) => <li key={gist.id}>{gist.description}</li>,
    [],
  )

  if (loading) {
    return <CircularProgress />
  }

  if (error) {
    return (
      <>
        <h3>Error</h3>
        <button onClick={requestGists}>Retry</button>
      </>
    )
  }

  return <ul>{gists.map(renderGist)}</ul>
}
