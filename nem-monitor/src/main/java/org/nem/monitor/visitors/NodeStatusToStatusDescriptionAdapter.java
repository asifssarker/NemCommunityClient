package org.nem.monitor.visitors;

import org.nem.core.model.NemStatus;
import org.nem.monitor.node.NemNodeType;

import java.util.function.Consumer;

/**
 * Visitor that keeps node menu item text in sync with status changes.
 */
public class NodeStatusToStatusDescriptionAdapter implements NodeStatusVisitor {
	private final NemNodeType nodeType;
	private final Consumer<NodeStatusDescription> statusDescriptionConsumer;

	/**
	 * Creates a new visitor.
	 *
	 * @param nodeType The node type being monitored.
	 * @param statusDescriptionConsumer The function to call when a description change is triggered.
	 */
	public NodeStatusToStatusDescriptionAdapter(
			final NemNodeType nodeType,
			final Consumer<NodeStatusDescription> statusDescriptionConsumer) {
		this.nodeType = nodeType;
		this.statusDescriptionConsumer = statusDescriptionConsumer;
		this.notifyStatus(nodeType, NemStatus.UNKNOWN);
	}

	@Override
	public void notifyStatus(final NemNodeType type, final NemStatus status) {
		if (this.nodeType != type) {
			return;
		}

		final String connectingMessage = String.format("Connecting to %s ...", this.nodeType);
		String statusMessage = connectingMessage;
		String actionMessage = connectingMessage;
		switch (status) {
			case SYNCHRONIZED:
				statusMessage = String.format("%s is running and is synchronized", this.nodeType);
				actionMessage = String.format("Stop %s", this.nodeType);
				break;

			case BOOTED:
				statusMessage = String.format("%s is running and is booted", this.nodeType);
				actionMessage = String.format("Stop %s", this.nodeType);
				break;

			case RUNNING:
				statusMessage = String.format("%s is running", this.nodeType);
				actionMessage = String.format("Stop %s", this.nodeType);
				break;

			case STOPPED:
				statusMessage = String.format("%s is not running", this.nodeType);
				actionMessage = String.format("Start %s", this.nodeType);
				break;

			case STARTING:
				statusMessage = String.format("%s is starting", this.nodeType);
				actionMessage = connectingMessage;
				break;
		}

		this.statusDescriptionConsumer.accept(new NodeStatusDescription(statusMessage, actionMessage));
	}
}
