const Result = ({ className, result, status }) => {
	if (result !== null) {
		return (<div className={className}>{status === 'success' ? result.output : result.error}</div>)
	}
	return null
}

export { Result };
